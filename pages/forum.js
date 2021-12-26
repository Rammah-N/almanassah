import styles from "../styles/Forum.module.scss";
import Image from "next/dist/client/image";
import Button from "./components/Button";
import Link from "next/link";
const Forum = () => {
	return (
		<main className={styles.forum}>
			<section className={styles.hero}>
				<p>
					المنتدى هو جهة غير رسمية للتعاون فيما بين ممثلي/ات المجتمع المدني
					السودانيين والدوليين والمنظمات, هدفنا هو تحول سلمي وإنتقال ديمقراطي,
					لا عنفي وشامل ومتكامل بيقادة سودانية.
				</p>
				<div className={styles.hero_logo}>
					<h1>
						المنتدى
						<br /> التفاكري <br />
						للسلام
					</h1>
					<div></div>
				</div>
			</section>
			<section className={styles.intro}>
				<div className={styles.cover}>
					<div className={styles.cover_hollow}></div>
					<div className={styles.cover_filled}>
						<h1>خلفية</h1>
					</div>
				</div>
				<div className={styles.intro_info} style={{lineHeight: '1.6'}}>
					<p>
						بدء عمل المنتدى التفاكري للسلام في العام 2012، وذلك عقب اندلاع
						الصراع المسلح بولايات جنوب كردفان والنيل الأزرق ما بين الحكومة
						السودانية والحركة الشعبية لتحرير السودان - شمال، وترافق ذلك مع
						الموجة الثانية لإبعاد والتضييق على أنشطة المجتمع المدني، مما دفع
						قطاع كبير من هذه المنظمات للعمل من خارج السودان، او تقليص انشطة
						المجتمع المدني المتواجدة في مناطق سيطرة الحكومة الساعية لإحداث تحول
						ديمقراطي
					</p>
					<p style={{marginTop: '1.5rem'}}>
						ومن هناك تبين أن هنالك حاجة لابتداع آلية تنسيق سودانية تجمع ما بين
						مكونات المجتمع المدني المتواجد في مناطق سيطرة النظام السابق والتي
						تعملُ في ظل تضييقٍ وحالةٍ أمنية حرجة، وأيضا المنظمات والمجموعات
						العاملة في مناطق سيطرة الحركات المسلحة، بالإضافة الى المنظمات التي
						جرى ابعادها خارج السودان التي ركزت جهودها في الضغط على النظام السابق
						من خلال الآليات الدولية والإقليمية ، وايضا المنظمات الدولية ذات
						الصلة، لتنسيق أنشطة متسقة ومنسقة للعمل في تعزيز قيم الديمقراطية
						والسلام والتحول الديمقراطي بالسودان
					</p>
				</div>
			</section>
			<section className={styles.activities}>
				<div className={styles.heading}>
					<h1>أنشطة المنتدى</h1>
				</div>
				<div className={styles.activity}>
					<h3>نشرات دورية</h3>
					<h3>إجتماعات نصف سنوية</h3>
					<h3>إجتماعات إقليمية</h3>
					<h3>إجتماعات مواضيعية</h3>
				</div>
				<div className={styles.activity}>
					<h3>حملات مناصرة</h3>
					<h3>نقاشات طاولة مستديرة</h3>
					<h3>ترجمة وتوزيع وثائق مهمة</h3>
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
						<h1>دور المنتدى</h1>
					</div>
					<p>
						دور المنتدى هو تسهيل صنع مساحات للنقاش والتنسيق بين الممثلين\ات
						المختلفين\ات. أما دور المساهمين\ات في المنتدى فهو امتلاك الملكية
						الكاملة للنحليلات والتوصيات، بينما يشجع المنتدى المساهمين\ات على
						تنفيذ اياً من التدخلات الموصى بها التي تنبثق من توصيات الأنشطة
						المتنوعة المنفذة عبر النتدى منأجل التوصل لتدخلات مطلعة وشاملة وتعالج
						جذور الصراع في السودان.
					</p>
				</div>
			</section>
			<section className={styles.cta}>
				<Button text="إقرأ المزيد" color="#FCB03F" bgc="#033F38">
					<Link href="/reports">إقرأ المزيد</Link>
				</Button>
				<p>
					يمكنك الوصول للمحتوى والتقارير والمستندات المتعلقة بالمنتدى التفاكري
					للسلام من هنا
				</p>
			</section>
		</main>
	);
};

export default Forum;
