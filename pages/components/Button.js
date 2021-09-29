import React from "react";
import styles from '../../styles/Components.module.scss'
const Button = ({ color, text, bgc='transparent' }) => {
	return (
		<button
		className={styles.Btn_plt}
			style={{
				color: color,
				border: `2px solid ${color}`,
				backgroundColor: bgc
			}}>
			{text}
		</button>
	);
};

export default Button;
