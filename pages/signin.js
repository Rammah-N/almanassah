import Image from "next/dist/client/image";
import styles from "../styles/Signin.module.scss";
import Link from "next/link";
import { useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";
import axios from "axios";
const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = async (e) => {
		e.preventDefault();
		const loginInfo = {
			identifier: username,
			password: password,
		};
		console.log(username, password);
		const login = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginInfo),
		});

		const loginResponse = await login.json();
		setCookie(null, 'jwt', loginResponse.jwt, {
			maxAge: 30 * 24 * 60 * 60,
			path: '/'
		})
		Router.push('/');
	};
	return (
		<main className={styles.register}>
			<div className={styles.container}>
				<div className={styles.slogan}>
					<h1>المنصة</h1>
				</div>
				<div className={styles.main}>
					<h2>تسجيل دخول</h2>

					<p>أو يمكنك إستخدام بريدك الإلكتروني لتسجيل الدخول</p>
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
						<button type="submit" className={styles.submit}>
							تسجيل الدخول
						</button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Register;
