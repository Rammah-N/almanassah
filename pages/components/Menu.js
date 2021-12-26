/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Menu.module.scss";
import useAuth from "../../stores/AuthStore";
import { destroyCookie, parseCookies } from "nookies";

const Menu = ({ toggled, toggleMenu }) => {
	const authStore = useAuth();
	const cookies = parseCookies();
	const handleLogout = () => {
		console.log("logged out");
		authStore.logout();
		authStore.setJWT(null);
		destroyCookie(null, "jwt", { path: "/" });
	};
	return (
		<div className={`${styles.menu} ${toggled ? styles.toggled : ""}`}>
			<ul className={`${styles.links} ${toggled ? styles.fadeIn : ""}`}>
				<li onClick={toggleMenu}>
					<Link href="/">الرئيسية</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/forum">المنتدى التفاكري للسلام</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/reports">تـــقـــاريـــــر</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/dataforchange">بــيانات من أجل التغيير</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/spaces">المساحات المفتوحة</Link>
				</li>
			</ul>
			<div className={`${styles.socials} ${toggled ? styles.fadeIn : ""}`}>
				<div className={styles.accounts}>
					<img
						src="/icons/facebook.svg"
						height="25"
						width="25"
						alt="Facebook"
						className={styles.icon}
					/>
					<img
						src="/icons/twitter.svg"
						height="25"
						width="25"
						alt="twitter"
						className={styles.icon}
					/>
					<img
						src="/icons/linkedin.svg"
						height="25"
						width="25"
						alt="linkedin"
						className={styles.icon}
					/>
				</div>
				<div className={styles.users}>
					{!cookies.jwt ? (
						<>
							<li onClick={toggleMenu}>
								<Link href="/register">حساب جديد</Link>
							</li>
							<li onClick={toggleMenu}>
								<Link href="/signin">تسجيل دخول</Link>
							</li>
						</>
					) : (
						<li style={{ cursor: "pointer" }} onClick={() => handleLogout()}>
							<a>تسجيل الخروج</a>
						</li>
					)}
					<li onClick={toggleMenu}>
						<Link href="/contact">تواصل معنا</Link>
					</li>
				</div>
				<div className={styles.translation}>
					<li onClick={toggleMenu}>
						<Link href="/en" locale="en">
							English
						</Link>
					</li>
					<li onClick={toggleMenu}>
						<Link href="/" locale="ar">
							العربية
						</Link>
					</li>
				</div>
			</div>
		</div>
	);
};

export default Menu;
