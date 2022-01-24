import styles from "../styles/Contact.module.scss";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import Head from 'next/head'
const Contact = () => {
	const router = useRouter();
	const t = router.locale === "ar" ? ar : en;
	return (
		<>
			<Head>
				<title>{t.contact.pageTitle}</title>
			</Head>

			<main className={styles.main}>
				<h1>{t.common.contactUs}</h1>
				<p>{t.contact.description}</p>
				<form>
					<label htmlFor="name">{t.contact.name}</label>
					<input type="text" name="name" required />

					<label htmlFor="email">{t.common.email}</label>
					<input type="email" name="email" required />

					<label htmlFor="phone">{t.common.phone}</label>
					<input type="tel" name="phone" required />

					<label htmlFor="message">{t.contact.message}</label>
					<textarea name="message" cols="30" rows="10" required></textarea>

					<button type="submit">{t.common.submit}</button>
				</form>
			</main>
		</>
	);
};

export default Contact;
