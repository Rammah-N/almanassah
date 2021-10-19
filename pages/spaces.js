import Space from "./components/Space";
import styles from "../styles/Spaces.module.scss";
import ReservationForm from './components/ReservationForm';
const spaces = () => {
	return (
		<main className={styles.spaces}>
			<h1 className={styles.title}>
				المساحات المفتوحة للمنتدى التفاكري للسلام
			</h1>
			<p className={styles.description}>
				المنتدى التفاكري للسلام يوفر عدة من المساحات في مواقع مختلفة حول
				السودان, هذه المساحات يمكن أن تستخدم في عدة نشاطات, ومجهزة بأحدث
				التقنيات وبيئة مريحه ومهيأة للإجتماعات والأنشطه المختلفة
			</p>
			<section className={styles.container}>
				<Space
					img="/images/space-1.png"
					title="مساحة كردفان"
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
          link="/register"
				/>
				<Space
					img="/images/space-2.png"
					title="مساحة الخرطوم 2"
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
          link="/register"
          flip
				/>
				<Space
					img="/images/space-3.png"
					title="مساحة الفاشر"
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
          link="/register"
				/>
				<Space
					img="/images/space-4.png"
          flip
					title="مساحة بورتسودان"
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
          link="/register"
				/>
			</section>

			<section className={styles.reserve}>
				<ReservationForm />
			</section>
		</main>
	);
};

export default spaces;
