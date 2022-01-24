import styles from "../styles/Signin.module.scss";
import { useState } from "react";
import { setCookie } from "nookies";
import Router, { useRouter } from "next/router";
import useAuth from "../stores/AuthStore";
import { useEffect } from "react";
import { parseCookies } from "nookies";
import Loader from "../components/Loader";
import { en } from "../locales/en";
import { ar } from "../locales/ar";
import Head from "next/head";
const SignIn = ({ jwt }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState('تسجيل الدخول');
	const authStore = useAuth();
	const router = useRouter();
	const locale = router.locale;
	const t = locale === "en" ? en : ar;
	const loginSuccess =
		locale === "en" ? "Login Successful!" : "تم تسجيل الدخول بنجاح !";
	const handleLogin = async (e) => {
		e.preventDefault();
		const loginInfo = {
			identifier: username,
			password: password,
		};
		const login = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginInfo),
		});

		const loginResponse = await login.json();
		if (loginResponse.jwt) {
			setCookie(null, "jwt", loginResponse.jwt, {
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});
			authStore.login();
			authStore.setJWT(loginResponse.jwt);
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setLoaded(loginSuccess);
				setTimeout(() => {
					Router.push("/");
				}, 500);
			}, 2000);
		}
	};
	useEffect(() => {
		if (jwt) {
			router.push("/");
		}
	}, []);
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
					<h2>{t.common.login}</h2>

					<p> {t.common.loginDescription}</p>
					<form onSubmit={(e) => handleLogin(e)}>
						<input
							type="email"
							placeholder={t.common.email}
							name="email"
							required
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						/>
						<input
							type="password"
							placeholder={t.common.password}
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						{loading ? (
							<Loader size="0.8" />
						) : (
							<button type="submit" className={styles.submit}>
								{loaded}
							</button>
						)}
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
export default SignIn;
