import styles from "../styles/Forum.module.scss";
import Image from "next/dist/client/image";
import Button from "../components/Button";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import axios from "axios";
import { parseCookies } from "nookies";
import roleEn from "../public/images/Role-en.svg";
import fwmLogoEn from "../public/images/fwm-logo-en.svg";
import Head from "next/head";
const Forum = ({ serverContent }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	const { activities, background, header, role } = serverContent;
	return (
		<>
			<Head>
				<title>{t.fwm.pageTitle}</title>
			</Head>
			<main className={styles.forum}>
				<section className={styles.hero}>
					<p>{t.fwm.heroDescription}</p>
					<div className={styles.hero_logo}>
						{router.locale === "ar" ? (
							<Image
								width="250"
								height="250"
								src={`${process.env.NEXT_PUBLIC_API_URL}${header.image.url}`}
								alt="Logo"
							/>
						) : (
							<Image width="350" height="350" src={fwmLogoEn} alt="Logo" />
						)}
					</div>
				</section>
				<section className={styles.intro}>
					<div className={styles.cover}>
						<div className={styles.cover_hollow}></div>
						<div className={styles.cover_filled}>
							<h1>{t.fwm.background}</h1>
						</div>
					</div>
					<div className={styles.intro_info} style={{ lineHeight: "1.6" }}>
						<p>{t.fwm.backgroundDescription}</p>
					</div>
				</section>
				<section className={styles.activities}>
					<div className={styles.heading}>
						<h1>{t.fwm.activitiesTitle}</h1>
					</div>
					<div className={styles.activity}>
						{t.fwm.activities.map((activity, i) => (
							<h3 key={activity + i}>{activity}</h3>
						))}
					</div>
				</section>
				<section className={styles.role}>
					{router.locale === "ar" ? (
						<Image
							src={`${process.env.NEXT_PUBLIC_API_URL}${role.image.url}`}
							height="380"
							width="350"
							alt="Roles of FWG"
						/>
					) : (
						<Image src={roleEn} height="380" width="350" alt="Roles of FWG" />
					)}
					<div className={styles.role_info}>
						<div className={styles.heading}>
							<h1>{t.fwm.role}</h1>
						</div>
						<p>{t.fwm.roleDescription}</p>
					</div>
				</section>
				<section className={styles.cta}>
					<Button text="إقرأ المزيد" color="#FCB03F" bgc="#033F38">
						<Link href="/reports">{t.common.readMore}</Link>
					</Button>
					<p>{t.fwm.readmoreDescription}</p>
				</section>
			</main>
		</>
	);
};
export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	const locale = ctx.locale === "ar" ? "ar-SD" : "en";
	const content = await axios(
		`${process.env.NEXT_PUBLIC_API_URL}/ptf?_locale=${locale}`
	)
		.then((res) => res.data)
		.catch((error) => {
			console.error(error);
		});
	const data = content;
	return {
		props: {
			// jwt: jwt,
			serverContent: data,
		},
	};
}
export default Forum;
