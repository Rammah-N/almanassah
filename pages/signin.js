import Image from "next/dist/client/image";
import styles from "../styles/Signin.module.scss";
import Link from "next/link";
import { useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import axios from "axios";
import useAuth from "../stores/AuthStore";
import { useEffect } from "react";
import router from "next/router";
import { parseCookies } from "nookies";
import Loader from "./components/Loader";
const SignIn = ({ jwt }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState("تسجيل الدخول");
	const authStore = useAuth();
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
				setLoaded("!تم تسجيل الدخول بنجاح");
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
		<main className={styles.register}>
			<div className={styles.container}>
				<div className={styles.slogan}>
					<h1>المنصة</h1>
				</div>
				<div className={styles.main}>
					<h2>تسجيل دخول</h2>

					<p> يمكنك إستخدام بريدك الإلكتروني لتسجيل الدخول</p>
					<form onSubmit={(e) => handleLogin(e)}>
						<input
							type="email"
							placeholder="البريد الإلكتروني"
							name="email"
							required
							onChange={(e) => setUsername(e.target.value)}
							value={username}
						/>
						<input
							type="password"
							placeholder="كلمة السر"
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
