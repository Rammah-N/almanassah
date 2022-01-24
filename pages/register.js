import styles from "../styles/Register.module.scss";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import axios from "axios";
import Loader from "../components/Loader";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import Head from 'next/head'
const Register = ({ jwt }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	const [loading, setLoading] = useState(false);
	const [registered, setRegistered] = useState(false);
	useEffect(() => {
		if (jwt) {
			router.push("/");
		}
	}, []);
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const [username, affinity, message, email, password] = form;
		setLoading(true);
		axios
			.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
				username: username.value,
				password: password.value,
				email: email.value,
			})
			.then(() => {
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<>
		<Head>
			<title>{t.home.pageTitle}</title>
		</Head>
			<main className={styles.register}>
				<div className={styles.container}>
					<div className={styles.slogan}>
						<h1>{t.common.logo}</h1>
					</div>
					<div className={styles.main}>
						<h2>{t.common.newAccount}</h2>
						<p> {t.common.loginDescription}</p>
						<form onSubmit={handleRegister}>
							<input
								type="text"
								placeholder={t.common.username}
								name="name"
								required
							/>
							<input
								type="text"
								placeholder={t.common.affinity}
								name="affinity"
								required
							/>
							<textarea
								type="text"
								placeholder={t.common.registerTextArea}
								name="affinity"
								required
							/>
							<input
								type="email"
								placeholder={t.common.email}
								name="email"
								required
							/>
							<input
								type="password"
								placeholder={t.common.password}
								name="password"
							/>
							<div>
								{loading ? (
									<Loader size="0.5" />
								) : (
									<>
										<Link href="/signin" passHref>
											<button className={styles.login}>{t.common.login}</button>
										</Link>
										<button type="submit" className={styles.submit}>
											{t.common.registerNow}
										</button>
									</>
								)}
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};
export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	return {
		props: {
			jwt: jwt,
		},
	};
}
export default Register;
