/* eslint-disable @next/next/no-img-element */
import NavIcon from "./NavIcon";
import Logo from "./Logo";
import navStyles from "../styles/Nav.module.scss";
import footerStyles from "../styles/Footer.module.scss";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import fwmLogoEn from "../public/images/fwm-logo-en.svg";
import Image from "next/image";
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
						{router.locale === "ar" ? (
							<Image src="/forum.png" alt="Forum" height="80" width="65" />
						) : (
							<Image src={fwmLogoEn} alt="Forum" height="80" width="65" />
						)}
					</Link>
					<div className={footerStyles.links}>
						<h3>{t.common.footer.linksTitle}</h3>
						<Link href="/">
							<span>{t.common.footer.links[0]}</span>
						</Link>
						<Link href="/about">
							<span>{t.common.footer.links[1]}</span>
						</Link>
						<Link href="/dataforchange">
							<span>{t.common.footer.links[2]}</span>
						</Link>
						<Link href="/reports">
							<span>{t.common.footer.links[3]}</span>
						</Link>
					</div>
				</div>
				<p>{t.common.copyrights}</p>
			</footer>
		</>
	);
};

export default Layout;
