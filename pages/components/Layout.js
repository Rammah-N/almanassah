/* eslint-disable @next/next/no-img-element */
import NavIcon from "./NavIcon";
import Logo from "./Logo";
import navStyles from "../../styles/Nav.module.scss";
import footerStyles from "../../styles/Footer.module.scss";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
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
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	const [iconColor, setIconColor] = useState("#48A470");
	const [toggled, setToggled] = useState(false);
	const toggleMenu = () => {
		if (!toggled) {
			setToggled(true);
			disableScroll();
			setIconColor("#fff");
			setTimeout(() => {
				// To delay changing the color of the Logo and Menu Icon to make it show like it's transitioning
				document.querySelector("nav").classList.toggle(navStyles.toggled);
			}, 500);
		} else {
			// Here i'm not delaying the transition when the menu's closing.
			setIconColor("#48A470");
			setToggled(false);
			enableScroll();
			document.querySelector("nav").classList.toggle(navStyles.toggled);
		}
	};
	return (
		<>
			<Menu toggled={toggled} toggleMenu={toggleMenu} />
			<nav className={navStyles.nav}>
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
						<img src="/forum.png" alt="Forum" height="80" width="65" />
					</Link>
					<div className={footerStyles.links}>
						<h3>{t.common.footer.linksTitle}</h3>
						<Link href="/">
							<a>{t.common.footer.links[0]}</a>
						</Link>
						<Link href="/about">
							<a>{t.common.footer.links[1]}</a>
						</Link>
						<Link href="/dataforchange">
							<a>{t.common.footer.links[2]}</a>
						</Link>
						<Link href="/reports">
							<a>{t.common.footer.links[3]}</a>
						</Link>
					</div>
				</div>
				<p>2021 © كل الحقوق ملكية المنتدى التفاكري للسلام</p>
			</footer>
		</>
	);
};

export default Layout;
