import Space from "../components/Space";
import styles from "../styles/Spaces.module.scss";
import ReservationForm from "../components/ReservationForm";
import { useEffect } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
const Spaces = ({ jwt }) => {
	const router = useRouter();
	const t = router.locale === "ar" ? ar : en;

	useEffect(() => {
		if (!jwt) {
			router.push("/");
		}
	}, []);
	return (
		<main className={styles.spaces}>
			<h1 className={styles.title}>{t.spaces.title}</h1>
			<p className={styles.description}>{t.spaces.description}</p>
			<section className={styles.container}>
				<Space
					img="/images/space-1.png"
					title={t.spaces.spacesTitles[0]}
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
					link="/register"
					map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.001992850757!2d32.534942214852386!3d15.59154238917761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e8f25a1e6c1ed%3A0x4237596ff94f2030!2zQWRlZWxhIEZvciBDdWx0dXJlIGFuZCBBcnRzINi52K_ZitmE2Kkg2YTZhNir2YLYp9mB2Kkg2YjYp9mE2YHZhtmI2YY!5e0!3m2!1sen!2s!4v1640500133306!5m2!1sen!2s"
				/>
				<Space
					img="/images/space-2.png"
					title={t.spaces.spacesTitles[1]}
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
					link="/register"
					flip
					map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9387588992927!2d29.652961914812526!3d12.047734691466667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16e89103eb4e5fef%3A0x7d66b9a17a376e0e!2z2YXYsdmD2LIg2K_Ysdin2LPYp9iqINin2YTYs9mE2KfZhdiMINis2KfZhdi52Kkg2KfZhNiv2YTZhtis!5e0!3m2!1sen!2s!4v1640500748257!5m2!1sen!2s"
				/>
				<Space
					img="/images/space-3.png"
					title={t.spaces.spacesTitles[2]}
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
					link="/register"
					map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9951908772696!2d23.46773061482138!3d12.908030390897599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2a4de30c8ff2fa!2zMTLCsDU0JzI4LjkiTiAyM8KwMjgnMTEuNyJF!5e0!3m2!1sen!2s!4v1640500796852!5m2!1sen!2s"
				/>
				<Space
					img="/images/space-4.png"
					flip
					title={t.spaces.spacesTitles[3]}
					description="نص تعريفي يتكلم عن محتوى المساحه وهدف المساحه ولماذا تم صنع المساحة للتوضيح للمستخدم والزائر عن ماهية المساحة"
					link="/register"
					map=""
				/>
			</section>

			<section className={styles.reserve}>
				<ReservationForm />
			</section>
		</main>
	);
};
export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	/* const api = process.env.NEXT_PUBLIC_API_URL;
	const res = await fetch(`${api}/dfc`);
	const content = await res.json(); */
	return {
		props: {
			// serverContent: content,
			jwt: jwt,
		},
	};
}
export default Spaces;
