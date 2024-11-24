import Image from "next/image";
import styles from "../styles/Reservation.module.scss";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
const Register = () => {
	const router = useRouter();
	const t = router.locale === "ar" ? ar : en;
	return (
		<div className={styles.container}>
			<div className={styles.slogan}>
				<h1>{t.spaces.bg}</h1>
			</div>
			<div className={styles.main}>
				<h2>{t.spaces.reserve}</h2>
				<p>{t.spaces.reserveDescription}</p>
				<form>
					<input type="text" placeholder={t.common.name} name="name" required />
					<input
						type="text"
						placeholder={t.common.affinity}
						name="affinity"
						required
					/>
					<input
						type="text"
						placeholder={t.spaces.form.reason}
						name="reason"
						required
					/>
					<label>{t.spaces.form.choose}</label>
					<select name="spaces" id="spaces">
						{t.spaces.form.options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
					<input
						type="email"
						placeholder={t.common.email}
						name="email"
						required
					/>
					<label htmlFor="date">{t.spaces.form.date}</label>
					<input type="date" name="date" />
					<button type="submit" className={styles.submit}>
						{t.spaces.form.reserve}
					</button>
				</form>
				{/* <Link href="https://forms.gle/ZhnSFT9fjaD16T8u8" passHref>
					<button style={{padding: '1rem 2rem', border: 'none',}}>{t.spaces.reserveNow}</button>
				</Link> */}
			</div>
		</div>
	);
};

export default Register;
