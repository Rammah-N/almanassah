import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
const Logo = ({ textColor, above }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	return (
		<div
			className={styles.nav_logo}
			style={{ zIndex: above ? `${99999}` : `${1}` }}>
			{
				// eslint-disable-next-line @next/next/link-passhref
			}{" "}
			<Link href="/" passHref>
				<h1 style={{ color: textColor }}>{t.common.logo}</h1>
			</Link>
			<div></div>
		</div>
	);
};

export default Logo;
