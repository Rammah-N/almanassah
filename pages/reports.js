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
	types,
	years,
} from "../api/content";
import Filter from "../components/Filter";
import ReportDocument from "../components/ReportDocument";
import { ar } from "../locales/ar";
import { en } from "../locales/en";
import filterStyles from "../styles/Filter.module.scss";
import styles from "../styles/Reports.module.scss";
const Reports = ({ serverData }) => {
	const router = useRouter();
	const t = router.locale === "en" ? en : ar;
	const [selectedTitle, setSelectedTitle] = useState(null);
	const [content, setContent] = useState(documents);
	console.log(serverData);
	// const jwtt = parseCookies().jwt
	/* 	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/reports`, {
				headers: {
					Authorization: `Bearer ${jwtt}`,
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []); */
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
/* 	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/reports`, {
				headers: { Authorization: `Bearer ${jwt}` },
			})
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []); */
	console.log(t.reports.advocacyDescription);
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
				{true ? (
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
export async function getStaticProps() {
	const jwt = parseCookies().jwt
	await axios
		.get("https://admin.almanassah-sd.org/reports", {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		})
		.then((resp) => {
			console.log(resp);
			return resp;
		})
		.catch((error) => {
			console.error(`Error from server is: ${error}`);
		});
	return {
		props: {
			serverData: 'hello',
		},
	};
}


export default Reports;
