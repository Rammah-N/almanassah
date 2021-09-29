import styles from "../../styles/Nav.module.scss";
import { useState } from "react";
const NavIcon = ({ toggleMenu, toggled }) => {
	const [iconColor, seticonColor] = useState('#48A470')
	const toggle = (e) => {
		if(iconColor === '#48A470') {
			seticonColor('#fff');
		} else {
			seticonColor('#48A470');
		}
		switch (e.target.tagName) {
			case "path":
				e.target.parentElement.parentElement.classList.toggle(styles.opened);
				e.target.parentElement.parentElement.setAttribute(
					"aria-expanded",
					e.target.classList.contains(styles.opened)
				);
				break;
			case "svg":
				e.target.parentElement.classList.toggle(styles.opened);
				e.target.parentElement.setAttribute(
					"aria-expanded",
					e.target.classList.contains(styles.opened)
				);
				break;
			default:
				e.target.classList.toggle(styles.opened);
				e.target.setAttribute(
					"aria-expanded",
					e.target.classList.contains(styles.opened)
				);
		}
	};
	const style = {
		stroke: iconColor
	};
	return (
		<button
			className={styles.menu}
			onClick={(e) => {
				toggle(e);
				toggleMenu();
			}}
			aria-label="Main Menu">
			<svg width="50" height="50" viewBox="0 0 100 100">
				<path
					style={style}
					className={`${styles.line} ${styles.line1}`}
					d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
				/>
				<path
					style={style}
					className={`${styles.line} ${styles.line2}`}
					d="M 20,50 H 80"
				/>
				<path
					style={style}
					className={`${styles.line} ${styles.line3}`}
					d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
				/>
			</svg>
		</button>
	);
};

export default NavIcon;
