import Image from "next/dist/client/image";
import styles from "../../styles/Reservation.module.scss";
import Link from "next/link";
const register = () => {
	return (
		<div className={styles.container}>
			<div className={styles.slogan}>
				<h1>المساحات</h1>
			</div>
			<div className={styles.main}>
				<h2>إحجز مساحة</h2>
				<p>
					الرجاء ملأ المعلومات أدناه لحجز مساحه وسيتم التواصل معك في حالة قبول
					طلبك
				</p>
				<form>
					<input type="text" placeholder="الإسم" name="name" required />
					<input type="text" placeholder="الجهة" name="affinity" required />
					<input type="text" placeholder="الهدف من الحجز" name="reason" required />
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
				</form>
			</div>
		</div>
	);
};

export default register;
