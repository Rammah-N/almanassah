/* eslint-disable @next/next/no-img-element */
import NavIcon from "./NavIcon";
import Logo from "./Logo";
import Image from "next/dist/client/image";
import navStyles from "../../styles/Nav.module.scss";
import footerStyles from "../../styles/Footer.module.scss";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
function disableScroll() {
	// Get the current page scroll position
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	window.onscroll = function () {
		window.scrollTo(scrollLeft, scrollTop);
	};
}
function enableScroll() {
	window.onscroll = function () {};
}

const Layout = ({ children }) => {
	const [iconColor, seticonColor] = useState("#48A470");
	const [toggled, settoggled] = useState(false);
	const toggleMenu = () => {
		if (!toggled) {
			settoggled(true);
			disableScroll();
			seticonColor("#fff");
			setTimeout(() => {
				// To delay changing the color of the Logo and Menu Icon to make it show like it's transitioning
				document.querySelector("nav").classList.toggle(navStyles.toggled);
			}, 500);
		} else {
			// Here i'm not delaying the transition when the menu's closing.
			seticonColor("#48A470");
			settoggled(false);
			enableScroll();
			document.querySelector("nav").classList.toggle(navStyles.toggled);
		}
	};
	return (
		<>
			<Menu toggled={toggled} toggleMenu={toggleMenu} />
			<nav className={navStyles.nav} toggled={toggled}>
				<NavIcon
					toggleMenu={toggleMenu}
					iconColor={iconColor}
					toggled={toggled}
				/>
				<Logo above />
			</nav>
			{children}
			<footer className={footerStyles.footer}>
				<div className={footerStyles.footer_main}>
					<Logo textColor="#fff" />
					{/* eslint-disable-next-line @next/next/link-passhref */}
					<Link href="/forum" passHref>
						<img src="/forum.png" alt="Forum" height="80" width="65"/>
					</Link>
					<div className={footerStyles.links}>
						<h3>روابط مهمة</h3>
						<Link href="/">
							<a>الرئيسية</a>
						</Link>
						<Link href="/about">
							<a>المنتدى</a>
						</Link>
						<Link href="/dataforchange">
							<a>بيانات للتغيير</a>
						</Link>
						<Link href="/reports">
							<a>التقارير</a>
						</Link>
					</div>
				</div>
				<p>2021 © كل الحقوق ملكية المنتدى التفاكري للسلام</p>
			</footer>
		</>
	);
};

export default Layout;
