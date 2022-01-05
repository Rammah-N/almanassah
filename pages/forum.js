import styles from "../styles/Forum.module.scss";
import Image from "next/dist/client/image";
import Button from "../components/Button";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import axios from "axios";
import { parseCookies } from "nookies";
const Forum = ({ serverContent }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	const { activities, background, header, role } = serverContent;
	console.log(role);
	console.log(activities);
	console.log(background);
	console.log(header);
	return (
		<main className={styles.forum}>
			<section className={styles.hero}>
				<p>{header.content}</p>
				<div className={styles.hero_logo}>
					<Image
						width="250"
						height="250"
						src={`https://admin.almanassah-sd.org${header.image.url}`}
						alt="Logo"
					/>
				</div>
			</section>
			<section className={styles.intro}>
				<div className={styles.cover}>
					<div className={styles.cover_hollow}></div>
					<div className={styles.cover_filled}>
						<h1>{background.title}</h1>
					</div>
				</div>
				<div className={styles.intro_info} style={{ lineHeight: "1.6" }}>
					<p>{background.content}</p>
					
				</div>
			</section>
			<section className={styles.activities}>
				<div className={styles.heading}>
					<h1>{t.fwm.activitiesTitle}</h1>
				</div>
				<div className={styles.activity}>
					{activities.activities.map((item) => (
						<h3 key={item}>{item.activity}</h3>
					))}
				</div>
			</section>
			<section className={styles.role}>
				<Image
					src={`https://admin.almanassah-sd.org${role.image.url}`}
					height="380"
					width="350"
					alt="Roles of FWG"
				/>
				<div className={styles.role_info}>
					<div className={styles.heading}>
						<h1>{role.title}</h1>
					</div>
					<p>{role.content}</p>
				</div>
			</section>
			<section className={styles.cta}>
				<Button text="إقرأ المزيد" color="#FCB03F" bgc="#033F38">
					<Link href="/reports">{t.common.readMore}</Link>
				</Button>
				<p>{t.fwm.readmoreDescription}</p>
			</section>
		</main>
	);
};
export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	const locale = ctx.locale === "ar" ? "ar-SD" : "en";
	const content = await axios(
		`https://admin.almanassah-sd.org/ptf?_locale=${locale}`
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
