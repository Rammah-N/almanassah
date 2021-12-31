/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.scss";
import useAuth from "../stores/AuthStore";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import { useEffect } from "react";
const Menu = ({ toggled, toggleMenu, jwt }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
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
					<Link href="/">{t.common.menu[0]}</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/forum">{t.common.menu[1]}</Link>
				</li>
				{cookies.jwt ? (
					<>
						<li onClick={toggleMenu}>
							<Link href="/reports">{t.common.menu[2]}</Link>
						</li>
						<li onClick={toggleMenu}>
							<Link href="/dataforchange">{t.common.menu[3]}</Link>
						</li>
						<li onClick={toggleMenu}>
							<Link href="/spaces">{t.common.menu[4]}</Link>
						</li>
					</>
				) : null}
			</ul>
			<div className={`${styles.socials} ${toggled ? styles.fadeIn : ""}`}>
				<div className={styles.users}>
					{!cookies.jwt ? (
						<>
							<li onClick={toggleMenu}>
								<Link href="/register">{t.common.newAccount}</Link>
							</li>
							<li onClick={toggleMenu}>
								<Link href="/signin">{t.common.login}</Link>
							</li>
						</>
					) : (
						<li style={{ cursor: "pointer" }} onClick={() => handleLogout()}>
							<a>{t.common.logout}</a>
						</li>
					)}
					<li onClick={toggleMenu}>
						<Link href="/contact">{t.common.contactUs}</Link>
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

export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	/* const api = process.env.NEXT_PUBLIC_API_URL;
	const res = await fetch(`${api}/dfc`);
	const content = await res.json(); */
	return {
		props: {
			// serverContent: content,
			jwt: jwt,
		},
	};
}

export default Menu;
