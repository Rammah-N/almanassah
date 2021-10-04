/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Reports.module.scss";
import Image from "next/dist/client/image";
import { useState, useEffect } from "react";
import ReportDocument from "../components/ReportDocument";
import { documents } from "./content";
import Head from "next/head";
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
	const toggleFilter = (e) => {
		e.target.parentNode.parentNode.classList.toggle(styles.shown)
	}
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
					من تقارير شهرية,نصف شهرية وتقارير إجتماعات وتقارير المناصرة.
				</p>
				<section className={styles.documents}>
					<div className={styles.documents_filters}>
						<button className={`${styles.btn} ${styles.btnAll}`}>
							عرض الكل
						</button>

						<div className={styles.filter}>
							<button className={`${styles.btn}`}>
								النوع
								<img src="/icons/downArrow.svg" alt="" width="20" height="10" onClick={(e) => toggleFilter(e)} />
							</button>
							<div className={styles.list}>
								<ul>
									<li>النوع الاول</li>
									<li>النوع الثاني</li>
									<li>النوع الثالث</li>
									<li>النوع الرابع</li>
								</ul>
							</div>
						</div>
						<div className={styles.filter}>
							<button className={`${styles.btn}`}>
								الموقع
								<img src="/icons/downArrow.svg" alt="" width="20" height="10" />
							</button>
						</div>
						<div className={styles.filter}>
							<button className={`${styles.btn}`}>
								التاريخ
								<img src="/icons/downArrow.svg" alt="" width="20" height="10" />
							</button>
						</div>
						<div className={styles.filter}>
							<button className={`${styles.btn}`}>
								الترتيب
								<img src="/icons/downArrow.svg" alt="" width="20" height="10" />
							</button>
						</div>
					</div>
					<div className={styles.documents_content}>
						{documents.map((doc, i) => (
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
