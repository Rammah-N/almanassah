/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import {
	documents,
	hero_info,
	locations,
	months,
	ar_types,
	en_types,
	years,
} from "../api/content";
import Filter from "../components/Filter";
import ReportDocument from "../components/ReportDocument";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import filterStyles from "../styles/Filter.module.scss";
import styles from "../styles/Reports.module.scss";
import documentIcon from "../public/icons/documentIcon.svg";
const Reports = ({ jwt, serverContent }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	const types = router.locale === "en" ? en_types : ar_types;
	const [selectedTitle, setSelectedTitle] = useState(null);
	const [content, setContent] = useState(serverContent);
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
			setContent(serverContent);
		} else {
			setContent(documents);
			if (types.indexOf(filter) !== -1) {
				setContent(serverContent.filter((doc) => doc.type.Type === filter));
			}
			if (locations.indexOf(filter) !== -1) {
				setContent(serverContent.filter((doc) => doc.subtype.Type === filter));
			}
			if (years.indexOf(Number(filter)) !== -1) {
				setContent(serverContent.filter((doc) => doc.year === Number(filter)));
			}
			if (months.indexOf(filter) !== -1) {
				setContent(serverContent.filter((doc) => doc.month === filter));
			}
		}
	};
	const toggleFilter = (e) => {
		e.target.parentNode.parentNode.classList.toggle(filterStyles.shown);
	};

	return (
		<>
			<Head>
				<title>{t.reports.pageTitle}</title>
			</Head>
			<main className={styles.main}>
				<section className={styles.hero}>
					<div className={styles.hero_info}>
						<p>
							{selectedTitle
								? t.reports[`${selectedTitle.id}Description`]
								: t.reports.heroStockDescription}
						</p>
					</div>
					<div className={styles.hero_titles}>
						<div
							className={styles.title}
							id="monthly"
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
							id="special"
							onClick={(e) => selectTitle(e)}>
							<h1>{t.reports.special}</h1>
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
							id="bimonthly"
							onClick={(e) => selectTitle(e)}>
							<h1>{t.reports.bimonthly}</h1>
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
				{jwt ? (
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
									title={doc.Title}
									key={`${doc.Title}-${i}`}
									img={documentIcon}
									type={doc.type.Type}
									subtype={doc.subtype.Type}
									month={doc.month}
									year={doc.year}
									link={doc.Pdf.url}
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
							<Link href="/signin">تسجيل الدخول</Link>
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
	const { req, res } = ctx;
	const { cookies } = req;
	const jwt = cookies.jwt || null;
	const locale = ctx.locale === "ar" ? "ar-SD" : "en";
	const content = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/reports?_locale=${locale}`,
		{
			method: "GET",
			headers: {
				Authorization: "Bearer " + jwt,
			},
		}
	)
		.then((resp) => resp.json())
		.then((data) => data)
		.catch((error) => {
			console.error(`Error from server is: ${error}`);
		});
	const data = await content;
	return {
		props: {
			jwt: jwt,
			serverContent: jwt ? data : null,
		},
	};
}

export default Reports;
