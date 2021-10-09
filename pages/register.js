import Image from "next/dist/client/image";
import styles from "../styles/Register.module.scss";
import Link from "next/link";
const register = () => {
	return (
		<main className={styles.register}>
			<div className={styles.container}>
				<div className={styles.slogan}>
					<h1>المنصة</h1>
				</div>
				<div className={styles.main}>
					<h2>حساب جديد</h2>
{/* 					<div className={styles.socials}>
						<Link href="/" passHref>
							<Image
								src="/icons/googleRegister.svg"
								alt="Gmail"
								width="25"
								height="25"
							/>
						</Link>
						<Link href="/" passHref>
							<Image
								src="/icons/twitterRegister.svg"
								alt="Twiiter"
								width="25"
								height="25"
							/>
						</Link>
						<Link href="/" passHref>
							<Image
								src="/icons/facebookRegister.svg"
								alt="Facebook"
								width="25"
								height="25"
							/>
						</Link>
					</div> */}
					<p>أو يمكنك إستخدام بريدك الإلكتروني للتسجيل</p>
					<form>
						<input type="text" placeholder="الإسم" name="name" required />
						<input
							type="email"
							placeholder="البريد الإلكتروني"
							name="email"
							required
						/>
						<input type="password" placeholder="كلمة السر" name="password" />
						<div>
							<Link href="/signin" passHref>
								<button className={styles.login}>تسجيل الدخول</button>
							</Link>
							<button type="submit" className={styles.submit}>
								تسجيل حساب جديد
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default register;
