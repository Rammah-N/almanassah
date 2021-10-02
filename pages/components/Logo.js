import Link from "next/link";
import styles from "../../styles/Nav.module.scss";
const Logo = ({ textColor, above}) => {
	return (
		<div className={styles.nav_logo} style={{zIndex: above? `${99999}` : `${1}`}}>
{			// eslint-disable-next-line @next/next/link-passhref
}			<Link href="/" >
				<h1 style={{color: textColor}}>
					المنصة
				</h1>
			</Link>

			<div></div>
		</div>
	);
};

export default Logo;
