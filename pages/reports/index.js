/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Reports.module.scss";
import filterStyles from "../../styles/Filter.module.scss";
import Image from "next/dist/client/image";
import { useState, useEffect } from "react";
import { parseCookies } from "nookies";
import ReportDocument from "../components/ReportDocument";
import Link from "next/link";
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
import { useRouter } from "next/dist/client/router";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
const Reports = ({ serverContent, jwt }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
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
		const filter = e.target.value;
		if (filter === "all") {
			setContent(documents);
		} else {
			setContent(documents);
			if (types.indexOf(filter) !== -1) {
				setContent(documents.filter((doc) => doc.type === filter));
			}
			if (locations.indexOf(filter) !== -1) {
				setContent(documents.filter((doc) => doc.subtype === filter));
			}
			if (years.indexOf(Number(filter)) !== -1) {
				setContent(documents.filter((doc) => doc.year === Number(filter)));
			}
			if (months.indexOf(filter) !== -1) {
				setContent(documents.filter((doc) => doc.month === filter));
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
								: t.reports.heroStockDescription}
						</p>
					</div>
					<div className={styles.hero_titles}>
						<div
							className={styles.title}
							id="bimonthly"
							onClick={(e) => selectTitle(e)}>
							<h1>{t.reports.monthly}</h1>
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
							<h1>{t.reports.advocacy}</h1>
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
							<h1>{t.reports.meetings}</h1>
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
							<h1>{t.reports.transitional}</h1>
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
				<p className={styles.description}>{t.reports.libraryDescription}</p>
				{!jwt ? (
					<section className={styles.documents}>
						<div className={styles.documents_filters}>
							<button
								className={`${styles.btn} ${styles.btnAll}`}
								onClick={(e) => filterContent(e)}
								value="all">
								{t.reports.libraryFilters[0]}
							</button>
							<Filter
								items={types}
								title={t.reports.libraryFilters[1]}
								toggleFilter={toggleFilter}
								selectFilter={filterContent}
							/>
							<Filter
								title={t.reports.libraryFilters[2]}
								items={locations}
								toggleFilter={toggleFilter}
								selectFilter={filterContent}
							/>
							<Filter
								title={t.reports.libraryFilters[3]}
								items={years}
								toggleFilter={toggleFilter}
								selectFilter={filterContent}
							/>
							<Filter
								title={t.reports.libraryFilters[4]}
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
				) : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginBottom: "8rem",
						}}>
						<h1
							style={{
								fontSize: "2.5rem",
								marginBottom: "4rem",
								textAlign: "center",
							}}>
							الرجاء تسجيل الدخول للوصول إلى تقارير المنتدى التفاكري للسلام
						</h1>
						<button
							style={{
								border: "none",
								backgroundColor: "#033F38",
								padding: "1rem 3rem",
								borderRadius: "4px",
								color: "#fff",
								fontWeight: "700",
								cursor: "pointer",
							}}>
							<Link href="/login">تسجيل الدخول</Link>
						</button>
					</div>
				)}
			</main>
		</>
	);
};
// const {publicRuntimeConfig} = getConfig();
// console.log(publicRuntimeConfig);

export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	const api = process.env.NEXT_PUBLIC_API_URL;
	const res = await fetch(`${api}/dfc`);
	const content = await res.json();
	return {
		props: {
			serverContent: content,
			jwt: jwt,
		},
	};
}

export default Reports;
