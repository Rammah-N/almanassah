import Image from "next/dist/client/image";
import styles from "../styles/Signin.module.scss";
import Link from "next/link";
const register = () => {
	return (
		<main className={styles.register}>
			<div className={styles.container}>
				<div className={styles.slogan}>
					<h1>المنصة</h1>
				</div>
				<div className={styles.main}>
					<h2>تسجيل دخول</h2>
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
					<p>أو يمكنك إستخدام بريدك الإلكتروني لتسجيل الدخول</p>
					<form>
						<input
							type="email"
							placeholder="البريد الإلكتروني"
							name="email"
							required
						/>
						<input type="password" placeholder="كلمة السر" name="password" />
							<button type="submit" className={styles.submit}>
								تسجيل الدخول
							</button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default register;
