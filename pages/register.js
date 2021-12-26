import Image from "next/dist/client/image";
import styles from "../styles/Register.module.scss";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import router from "next/router";
import axios from "axios";
import Loader from "./components/Loader";
const Register = ({ jwt }) => {
	const [loading, setLoading] = useState(false);
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
			.then((response) => {
				setLoading(false);
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<main className={styles.register}>
			<div className={styles.container}>
				<div className={styles.slogan}>
					<h1>المنصة</h1>
				</div>
				<div className={styles.main}>
					<h2>حساب جديد</h2>
					<p> يمكنك إستخدام بريدك الإلكتروني للتسجيل</p>
					<form onSubmit={handleRegister}>
						<input
							type="text"
							placeholder="إسم المستخدم"
							name="name"
							required
						/>
						<input type="text" placeholder="الجهة" name="affinity" required />
						<textarea
							type="text"
							placeholder="في ماذا ستستخدم محتوى المنتدى"
							name="affinity"
							required
						/>
						<input
							type="email"
							placeholder="البريد الإلكتروني"
							name="email"
							required
						/>
						<input type="password" placeholder="كلمة السر" name="password" />
						<div>
							{loading ? (
								<Loader size="0.5" />
							) : (
								<>
									<Link href="/signin" passHref>
										<button className={styles.login}>تسجيل الدخول</button>
									</Link>
									<button type="submit" className={styles.submit}>
										تسجيل حساب جديد
									</button>
								</>
							)}
						</div>
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
export default Register;
