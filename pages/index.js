/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/dist/client/link";
import Slider from "../components/Slider";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import { parseCookies } from "nookies";
export default function Home({ serverContent }) {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	const {
		Goals: goals,
		Header: header,
		Updates: updates,
		about,
	} = serverContent;
	return (
		<>
			<Head>
				<title>{t.home.pageTitle}</title>
			</Head>
			<main className={styles.home}>
				Hero Section
				<section className={styles.home_hero}>
					<div
						style={{
							width: "50%",
							height: "200px",
							backgroundColor: "#10324F",
							position: "absolute",
							top: "0",
							left: "0",
						}}></div>
					<div
						style={{
							width: "50%",
							height: "200px",
							backgroundColor: "#fff",
							position: "absolute",
							top: "0",
							right: "0",
						}}></div>
					<h1>
						<span>{t.home.heroTitle[0]}</span>
						<span>{t.home.heroTitle[1]} </span>
						<br />
						<span>{t.home.heroTitle[2]}</span>
						<span>{t.home.heroTitle[3]}</span>
					</h1>
					<div></div>
				</section>
				<section className={styles.home_updates}>
					<Slider content={updates.reports} />
				</section>
				{/* Goals Section */}
				<section className={styles.home_goals}>
					<p className={styles.subtitle}>{t.home.descriptionSubtitle}</p>
					<p className={styles.description}>{t.home.description}</p>
					<div className={styles.goals_container}>
						<div className={styles.home_goals_goal}>
							<p>{t.home.goals[0]}</p>
							<img src="/icons/goal-1.svg" alt="" />
						</div>
						<div className={styles.home_goals_goal}>
							<p>{t.home.goals[1]}</p>
							<img src="/icons/goal-1.svg" alt="" />
						</div>
						<div className={styles.home_goals_goal}>
							<p>{t.home.goals[2]}</p>
							<img src="/icons/goal-1.svg" alt="" />
						</div>
					</div>
				</section>
				{/* Vision Section */}
				<section className={styles.home_vision}>
					<Image
						src="/icons/hands.svg"
						width="400"
						height="280"
						alt="Hands shaking"
					/>
					<h1>{t.home.handshakeGoal}</h1>
				</section>
				{/* CTA Section */}
				<section className={styles.home_cta}>
					<p>{t.home.registerDescription}</p>
					<Link href="/register">
						<Button color="#10324F">{t.common.registerNow}</Button>
					</Link>
				</section>
			</main>
		</>
	);
}
export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	const locale = ctx.locale === "ar" ? "ar-SD" : "en";
	const content = await axios(
		`${process.env.NEXT_PUBLIC_API_URL}/home?_locale=${locale}`
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
