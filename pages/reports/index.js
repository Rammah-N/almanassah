/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Reports.module.scss";
import Image from "next/dist/client/image";
import { useState, useEffect } from "react";
import { ReportDocument as Document } from "../components/ReportDocument";
import { documents } from "./content";
const Reports = () => {
	const [selectedTitle, setSelectedTitle] = useState(null);
	const hero_info = {
		bimonthly: "معلومات عن التقارير نصف الشهرية",
		advocacy: "معلومات عن تقارير المناصرة",
		meetings: "معلومات عن تقارير الإجتماعات",
		monthly: "معلومات عن التقارير الشهرية",
	};
	const selectTitle = (e) => {
		const title = e.target;
		if (title.tagName == "H1") {
			if (selectedTitle) {
				selectedTitle.classList.remove(styles.selected);
				title.parentNode.classList.add(styles.selected);
				setSelectedTitle(title.parentNode);
			} else {
				setSelectedTitle(title.parentNode);
				title.parentNode.classList.add(styles.selected);
			}
		}
	};
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<div className={styles.hero_info}>
					<p>
						{selectedTitle
							? hero_info[selectedTitle.id]
							: "الرجاء إختيار إحدى العناوين لمعرفة المزيد"}
					</p>
				</div>
				<div className={styles.hero_titles}>
					<div
						className={styles.title}
						id="bimonthly"
						onClick={(e) => selectTitle(e)}>
						<h1>تقارير نصف شهرية</h1>
						<div className={styles.arrow}>
							<img src="/icons/arrow.svg" alt="Arrow" height="25" width="20" />
						</div>
					</div>
					<div
						className={styles.title}
						id="advocacy"
						onClick={(e) => selectTitle(e)}>
						<h1>مناصرة</h1>
						<div className={styles.arrow}>
							<img src="/icons/arrow.svg" alt="Arrow" height="25" width="20" />
						</div>
					</div>
					<div
						className={styles.title}
						id="meetings"
						onClick={(e) => selectTitle(e)}>
						<h1>تقارير إجتماعات</h1>
						<div className={styles.arrow}>
							<img src="/icons/arrow.svg" alt="Arrow" height="25" width="20" />
						</div>
					</div>
					<div
						className={styles.title}
						id="monthly"
						onClick={(e) => selectTitle(e)}>
						<h1>تقارير شهرية</h1>
						<div className={styles.arrow}>
							<img src="/icons/arrow.svg" alt="Arrow" height="25" width="20" />
						</div>
					</div>
				</div>
			</section>
			<section className={styles.documents}>
				<div className={styles.documents_filters}>
					
				</div>
			</section>
		</main>
	);
};

export default Reports;
