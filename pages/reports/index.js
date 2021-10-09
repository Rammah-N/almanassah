/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Reports.module.scss";
import filterStyles from "../../styles/Filter.module.scss";
import Image from "next/dist/client/image";
import { useState, useEffect } from "react";
import ReportDocument from "../components/ReportDocument";
import {
	hero_info,
	documents,
	types,
	locations,
	years,
	months,
} from "./content";
import Head from "next/head";
import Filter from "../components/Filter";
const Reports = () => {
	const [selectedTitle, setSelectedTitle] = useState(null);
	const [content, setContent] = useState(documents);
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
	const filterContent = (e) => {
		const filter = e.target.value
		console.log(filter);
		if(filter === 'all') {
			setContent(documents);
		} else {
			setContent(documents);
			if(types.indexOf(filter) !== -1) {
				setContent(documents.filter(doc => doc.type === filter));
			}
			if(locations.indexOf(filter) !== -1) {
				setContent(documents.filter(doc => doc.subtype === filter));
			}
			if(years.indexOf(Number(filter)) !== -1) {
				setContent(documents.filter(doc => doc.year === Number(filter)));
			}
			if(months.indexOf(filter) !== -1) {
				setContent(documents.filter(doc => doc.month === filter));
			}
		}
	};
	const toggleFilter = (e) => {
		e.target.parentNode.parentNode.classList.toggle(filterStyles.shown);
	};

	return (
		<>
			<Head>
				<title>تقارير المنتدى</title>
			</Head>
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
								<img
									src="/icons/arrow.svg"
									alt="Arrow"
									height="25"
									width="20"
								/>
							</div>
						</div>
						<div
							className={styles.title}
							id="advocacy"
							onClick={(e) => selectTitle(e)}>
							<h1>مناصرة</h1>
							<div className={styles.arrow}>
								<img
									src="/icons/arrow.svg"
									alt="Arrow"
									height="25"
									width="20"
								/>
							</div>
						</div>
						<div
							className={styles.title}
							id="meetings"
							onClick={(e) => selectTitle(e)}>
							<h1>تقارير إجتماعات</h1>
							<div className={styles.arrow}>
								<img
									src="/icons/arrow.svg"
									alt="Arrow"
									height="25"
									width="20"
								/>
							</div>
						</div>
						<div
							className={styles.title}
							id="monthly"
							onClick={(e) => selectTitle(e)}>
							<h1>تقارير شهرية</h1>
							<div className={styles.arrow}>
								<img
									src="/icons/arrow.svg"
									alt="Arrow"
									height="25"
									width="20"
								/>
							</div>
						</div>
					</div>
				</section>
				<p className={styles.description}>
					ستجد هنا جميع المستندات والتقارير المتعلقة بالمنتدى التفاكري للسلام,
					من تقارير شهرية,نصف شهرية وتقارير إجتماعات وتقارير المناصرة
				</p>
				<section className={styles.documents}>
					<div className={styles.documents_filters}>
						<button className={`${styles.btn} ${styles.btnAll}`} onClick={(e) => filterContent(e)} value="all">
							عرض الكل
						</button>
						<Filter
							items={types}
							title="نوع التقرير"
							toggleFilter={toggleFilter}
							selectFilter={filterContent}
						/>
						<Filter
							title="الموقع"
							items={locations}
							toggleFilter={toggleFilter}
							selectFilter={filterContent}
						/>
						<Filter
							title="السنة"
							items={years}
							toggleFilter={toggleFilter}
							selectFilter={filterContent}
						/>
						<Filter
							title="الشهر"
							items={months}
							toggleFilter={toggleFilter}
							selectFilter={filterContent}
						/>
					</div>
					<div className={styles.documents_content}>
						{content.map((doc, i) => (
							<ReportDocument
								title={doc.title}
								key={`${doc.title}-${i}`}
								img={doc.img}
								type={doc.type}
								subtype={doc.subtype}
								month={doc.month}
								year={doc.year}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default Reports;
