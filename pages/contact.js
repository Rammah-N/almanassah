import styles from "../styles/Contact.module.scss";
const contact = () => {
	return (
		<main className={styles.main}>
			<h1>تواصل معنا</h1>
			<p>لا تتردد في إستخدام النموذج أدناه للتواصل معنا</p>
			<form>
				<label htmlFor="name">الإسم بالكامل</label>
				<input type="text" name="name" required />

				<label htmlFor="email">البريد الإلكتروني</label>
				<input type="email" name="email" required />

				<label htmlFor="phone">رقم الهاتف</label>
				<input type="tel" name="phone" required />

				<label htmlFor="message">الرسالة</label>
				<textarea name="message" cols="30" rows="10" required></textarea>

				<button type="submit">إرسال</button>
			</form>
		</main>
	);
};

export default contact;
