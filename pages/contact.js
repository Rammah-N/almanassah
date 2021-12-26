import styles from "../styles/Contact.module.scss";
const contact = () => {
	return (
		<main className={styles.main}>
			<h1>تواصل معنا</h1>
			<p>
				للتواصل مع فريق تنسيق المنتدى التفاكري للسلام فيما يتصل بالتعرف على
				أنشطة وبرامج عمل المنتدى التفاكري بمناطق عمله المختلفة، الرجاء استخدام
				النموذج المرفق في الأدنى، سوف يقوم فريق التنسيق بالتواصل مع سيادتكم/ن
				مباشرة
			</p>
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
