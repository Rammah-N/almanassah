import React from "react";
import styles from "../../styles/Components.module.scss";
const Button = ({ color, bgc, children }) => {
	return (
		<button
			className={styles.Btn_plt}
			style={{
				color: color,
				border: bgc ? "none" : `2px solid ${color}`,
				backgroundColor: bgc,
			}}>
			{children}
		</button>
	);
};

export default Button;
