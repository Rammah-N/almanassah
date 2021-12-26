/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Button from "./components/Button";
import Link from "next/dist/client/link";
import { Slider } from "./components/Slider";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { ar } from "./locales/ar";
import { en } from "./locales/en";
export default function Home() {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	console.log(t);
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
				{/*Hero Section */}

				<section className={styles.home_hero}>
					<h1>
						{t.home.heroTitle[0]}
						<span> {t.home.heroTitle[1]} </span>
						<br /> {t.home.heroTitle[2]} <span> {t.home.heroTitle[3]}</span>
					</h1>
					<div></div>
				</section>
				<section className={styles.home_updates}>
					<Slider content={data} />
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
					<Button color="#10324F">
						<Link href="/register">{t.common.registerNow}</Link>
					</Button>
				</section>
			</main>
		</>
	);
}
