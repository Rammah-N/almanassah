import styles from "../styles/Forum.module.scss";
import Image from "next/dist/client/image";
import Button from "./components/Button";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { ar } from "./locales/ar";
import { en } from "./locales/en";
const Forum = () => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	return (
		<main className={styles.forum}>
			<section className={styles.hero}>
				<p>{t.fwm.heroDescription}</p>
				<div className={styles.hero_logo}>
					<h1>
						{t.fwm.heroTitle[0]}
						<br />
						{t.fwm.heroTitle[1]}
						<br />
						{t.fwm.heroTitle[2]}
					</h1>
					<div></div>
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
					<p>{t.fwm.backgroundDescription[0]}</p>
					<p style={{ marginTop: "1.5rem" }}>
						{t.fwm.backgroundDescription[1]}
					</p>
				</div>
			</section>
			<section className={styles.activities}>
				<div className={styles.heading}>
					<h1>{t.fwm.activitiesTitle}</h1>
				</div>
				<div className={styles.activity}>
					<h3>{t.fwm.activities[0]}</h3>
					<h3>{t.fwm.activities[1]}</h3>
					<h3>{t.fwm.activities[2]}</h3>
					<h3>{t.fwm.activities[3]}</h3>
				</div>
				<div className={styles.activity}>
					<h3>{t.fwm.activities[4]}</h3>
					<h3>{t.fwm.activities[5]}</h3>
					<h3>{t.fwm.activities[6]}</h3>
				</div>
			</section>
			<section className={styles.role}>
				<Image
					src="/images/Role.svg"
					height="380"
					width="350"
					alt="Roles of FWG"
				/>
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
	);
};

export default Forum;
