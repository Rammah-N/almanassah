import React from "react";
import styles from "../styles/Loader.module.scss";
const Loader = ({size }) => {
	return (
		<div className={styles.lds_ring} style={{transform: `scale(${size})`}}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
