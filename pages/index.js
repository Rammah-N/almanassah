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
	console.log(serverContent);
	console.log(goals);
	console.log(header);
	const data = [
		{
			title: "المناصرة, ما هي وما أهدافها",
			tags: ["المنتدى التفاكري للسلام", "تحديث", "أخبار شهرية"],
			img: "/images/img1.png",
			link: "/about",
		},
		{
			title: "تقارير الإجتماعات نصف الشهرية للمنتدى التفاكري للسلام",
			tags: ["المنتدى التفاكري للسلام", "تحديث", "أخبار شهرية"],
			img: "/images/img2.png",
			link: "/about",
		},
		{
			title: "تعرف على المساحات المفتوحه الخاصة بالمنصة",
			tags: ["المنتدى التفاكري للسلام", "المساحات", "تسجيل"],
			img: "/images/img3.png",
			link: "/about",
		},
	];
	return (
		<>
			<Head>
				<title>المنصة</title>
			</Head>
			<main className={styles.home}>
				Hero Section
				<section className={styles.home_hero}>
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
					<p className={styles.description}>{goals.goals[0].main}</p>
					<div className={styles.goals_container}>
						<div className={styles.home_goals_goal}>
							<p>{goals.goals[0].goal1}</p>
							<img src="/icons/goal-1.svg" alt="" />
						</div>
						<div className={styles.home_goals_goal}>
							<p>{goals.goals[0].goal2}</p>
							<img src="/icons/goal-1.svg" alt="" />
						</div>
						<div className={styles.home_goals_goal}>
							<p>{goals.goals[0].goal3}</p>
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
					<Link href="/register" passHref>
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
		`https://admin.almanassah-sd.org/home?_locale=${locale}`
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
