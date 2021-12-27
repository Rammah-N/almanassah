import styles from "../styles/DFC.module.scss";
import Link from "next/link";
import Image from "next/dist/client/image";
import Button from "../components/Button";
import Head from "next/head";
const DataForChange = () => {
	return (
		<>
			<Head>
				<title>بيانات للتغيير</title>
			</Head>
			<main className={styles.main}>
				<section className={styles.hero}>
					<div className={styles.hero_chart}>
						<div className={styles.chart}>
							<span>نبذة عن المشروع</span>
							<h1>:عدد الإستبيانات</h1>
							<p>150 إستبيان على مر 7 شهور في 11 ولاية</p>
							<div className={styles.chart_figure}>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
							</div>
						</div>
					</div>
					<div className={styles.hero_info}>
						<h1>بيانات للتغيير هو أول مشروع لجمع البيانات في السودان</h1>
						<p>
							الهدف من خلقنا لمشروع بيانات للتغيير هو لدعم البحوث ولدعم التغيير
							في السودان عن طريق توفير البيانات الكافية لتحقيق هذه الأهداف
						</p>
						<Link href="/" passHref>
							<button>التسجيل للبرنامج</button>
						</Link>
					</div>
				</section>
				<section className={styles.features}>
					<h1>مميزات البرنامج</h1>
					<div className={styles.container}>
						<div className={styles.feature}>
							<h2>بيانات دقيقة</h2>
							<p>
								كل المعلومات التي تم جمعها في هذا المشروع دقيقة وتم التحقق منها
								من خبراء مختصين في جمع البيانات
							</p>
							<Image
								width="90"
								height="90"
								src="/icons/accurate.svg"
								alt="Accurate Icon"
							/>
						</div>
						<div className={styles.feature}>
							<h2>مواضيع متنوعة</h2>
							<p>
								هذا المشروع يتضمن بيانات في عدة مجالات وبتفاصيل كئيرة عن كل مجال
								تتيح للمستخدم البحث في عدة مجالات
							</p>
							<Image
								width="90"
								height="90"
								src="/icons/network.svg"
								alt="Network Icon"
							/>
						</div>
						<div className={styles.feature}>
							<h2>تحديثات دورية</h2>
							<p>
								مشروع بيانات للتغيير مشروع مستمر وقائم عليه فريق عمل كبير جدا,
								ويتم تحديث البيانات دوريا لتزويد المستخدم بأكبر قدر من المعلومات
							</p>
							<Image
								width="90"
								height="90"
								src="/icons/update.svg"
								alt="Update Icon"
							/>
						</div>
					</div>
				</section>
				<section className={styles.stats}>
					<div className={styles.stat}>
						<div className={styles.stat_info}>
							<h2>بداية تسجيل البيانات</h2>
							<h1>منذ عام 2017</h1>
						</div>
					</div>
					<i></i>
					<div className={styles.stat}>
						<div className={styles.stat_info}>
							<h2>عدد المواضيع</h2>
							<h1>15 موضوع مختلف</h1>
						</div>
					</div>
					<i></i>
					<div className={styles.stat}>
						<div className={styles.stat_info}>
							<h2>عدد الإستبيانات</h2>
							<h1>1500 إستبيان</h1>
						</div>
					</div>
				</section>
				<section className={styles.about}>
					<h1>ليه عملنا مشروع بيانات للتغيير؟</h1>
					<p>
						عملنا مشروع “بيانات للتغيير” عشان دايرين نصلح البلد ونمشي لي قدام,
						ونساعد في تطوير المشاريع عن طريق توفير أكبر كم من البيانات لتحفيز
						العمل ولدعم البرامج المتعلقة بهذه البرامج بصورة مباشرة أو غير مباشرة
					</p>
				</section>
				<section className={styles.cta}>
					<Button text="إقرأ المزيد" color="#FCB03F" bgc="#10324F">
						<Link href="/reports">إقرأ المزيد</Link>
					</Button>
					<p>
						لو داير تصل للبيانات المهمة المتعلقة المتعلقة بي مشروع بيانات
						للتغيير ؟ ممكن عن طريق الموقع الرئيسي للمشروع
					</p>
				</section>
			</main>
		</>
	);
};

export default DataForChange;
