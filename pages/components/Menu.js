/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Menu.module.scss";
import { useState } from "react";
const Menu = ({ toggled, toggleMenu }) => {
	return (
		<div className={`${styles.menu} ${toggled ? styles.toggled : ""}`}>
			<ul className={`${styles.links} ${toggled ? styles.fadeIn : ""}`}>
				<li onClick={toggleMenu}>
					<Link href="/">الرئيسية</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/forum">المنتدى</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/dataforchange">بيانات للتغيير</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link href="/spaces">المساحات</Link>
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
					<Link href="/register">حساب جديد</Link>
					<Link href="/signin">تسجيل دخول</Link>
				</div>
			</div>
		</div>
	);
};

export default Menu;
