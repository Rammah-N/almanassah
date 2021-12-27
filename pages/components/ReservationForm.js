import Image from "next/dist/client/image";
import styles from "../../styles/Reservation.module.scss";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
const Register = () => {
	const router = useRouter()
	const t = router.locale === 'ar' ? ar : en
	return (
		<div className={styles.container}>
			<div className={styles.slogan}>
				<h1>{t.spaces.bg}</h1>
			</div>
			<div className={styles.main}>
				<h2>{t.spaces.reserve}</h2>
				<p>{t.spaces.reserveDescription}</p>
				{/* <form>
					<input type="text" placeholder="الإسم" name="name" required />
					<input type="text" placeholder="الجهة" name="affinity" required />
					<input
						type="text"
						placeholder="الهدف من الحجز"
						name="reason"
						required
					/>
					<label>إختر المساحة</label>
					<select name="spaces" id="spaces">
						<option value="portsudan">بورتسودان</option>
						<option value="kordufan">كردفان</option>
						<option value="darfur">دارفور</option>
					</select>
					<input
						type="email"
						placeholder="البريد الإلكتروني"
						name="email"
						required
					/>
					<label htmlFor="date">تاريخ الحجز</label>
					<input type="date" name="date" />
					<button type="submit" className={styles.submit}>
						الحجز الآن
					</button>
				</form> */}
				<Link href="https://forms.gle/ZhnSFT9fjaD16T8u8" passHref>
					<button style={{padding: '1rem 2rem', border: 'none',}}>{t.spaces.reserveNow}</button>
				</Link>
			</div>
		</div>
	);
};

export default Register;
