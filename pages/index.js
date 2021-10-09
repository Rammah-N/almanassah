/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Button from "./components/Button";
import Link from "next/dist/client/link";
import { Slider } from "./components/Slider";
import  Head  from "next/head";
import { useRouter } from "next/dist/client/router";
import { ar } from './locales/ar'
import { en } from './locales/en'
export default function Home() {
	const router = useRouter();
	const t = router.locale === 'ar' ? ar : ar;
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
					المنصة وجهتك <span>لجميع البيانات</span>
					<br /> المتعلقة بالمج<span>تمعات المدنية</span>
				</h1>
				<div></div>
			</section>
			<section className={styles.home_updates}>
				<Slider content={data} />
			</section>
			{/* Goals Section */}
			<section className={styles.home_goals}>
				<p className={styles.subtitle}>بوابتك للمجتمع المدني</p>
				<p className={styles.description}>
					المنصة هي مساحة اسفيرية تستعرض أعمال و أنشطة ومشروعات العديد من
					المنظمات و الفاعلين/ات بالمجتمع المدني و المجموعات القاعدية على
					المستوى الوطني و المحلي
				</p>
				<div className={styles.goals_container}>
					<div className={styles.home_goals_goal}>
						<p>{t.home.heroTitle}</p>
						<img src="/icons/goal-1.svg" alt="" />
					</div>
					<div className={styles.home_goals_goal}>
						<p>الربط ما بين كافة مكونات المجتمع المدني في السودان</p>
						<img src="/icons/goal-1.svg" alt="" />
					</div>
					<div className={styles.home_goals_goal}>
						<p>
							للإسهام في <br /> تتوطيد السلام
						</p>
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
				<h1>
					{" "}
					هدفنا خلق جبهة موحدة ومنسقة ما بين كافة مكونات ومستويات المجتمع المدني
					لدعم قضايا الإنتقال في السودان
				</h1>
			</section>

			{/* CTA Section */}
			<section className={styles.home_cta}>
				<p>يمكنك التسجيل الآن للوصول إلى جميع محتويات المنصة</p>
				<Button color="#10324F">
					<Link href="/register">سجل الآن</Link>
				</Button>
			</section>
		</main>
		</>
	);
}

