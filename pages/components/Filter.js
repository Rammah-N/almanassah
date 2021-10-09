/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Filter.module.scss";
import { useState } from "react";
const Filter = ({ title, items, toggleFilter, selectFilter }) => {

	const chooseFilter = (e) => {
    e.target.parentNode.parentNode.parentNode.classList.toggle(styles.shown);
	};
	return (
		<div className={styles.filter}>
			<button className={`${styles.btn}`}>
				{title}
				<img
					onClick={(e) => toggleFilter(e)}
					src="/icons/downArrow.svg"
					alt=""
					width="20"
					height="10"
				/>
			</button>

			<div className={styles.list}>
				<ul className={title == "الشهر" ? styles.grid : ""}>
					{items.map((item, i) => (
						<option
							key={`${item}-i`}
							value={item}
							onClick={(e) => {
                chooseFilter(e);
								selectFilter(e);
							}}>
							{item}
						</option>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Filter;
