import styles from "../styles/DFC.module.scss";
import Link from "next/link";
import Image from "next/dist/client/image";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import Button from "../components/Button";
import Head from "next/head";
import { useRouter } from "next/router";
import { en } from "../locales/en";
import { ar } from "../locales/ar";
import riots_en from "../public/images/riots-en.png";
import riots_ar from "../public/images/riots-ar.png";
import poli_en from '../public/images/poli-rep-en.png';
import poli_ar from '../public/images/poli-ar.png';
import axios from "axios";
const DataForChange = ({ jwt }) => {
	const router = useRouter();
	const locale = router.locale;
	const t = locale === "ar" ? ar : en;
	axios.get("https://admin.almanassah-sd.org/dfc").then((res) => {
		console.log(res);
	});
	return (
		<>
			<Head>
				<title>{t.dfc.pageTitle}</title>
			</Head>
			<main className={styles.main}>
				<section className={styles.hero}>
					<div className={styles.hero_chart}>
						<div className={styles.chart}>
							<span>{t.dfc.hero.chartSub}</span>
							<h1>{t.dfc.hero.chartStatTitle}</h1>
							<p>{t.dfc.hero.chartStat}</p>
							<div className={styles.chart_figure}>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
					<div className={styles.hero_info}>
						<h1>{t.dfc.hero.main}</h1>
						<p>{t.dfc.hero.mainSub}</p>
						<Link href="https://almanassa.exploredata.site/" passHref>
							<button>{t.common.registerNow}</button>
						</Link>
					</div>
				</section>
				<section className={styles.features}>
					<h1>{t.dfc.features.title}</h1>
					<div className={styles.container}>
						<div className={styles.feature}>
							<h2>{t.dfc.features.list[0].title}</h2>
							<p>{t.dfc.features.list[0].description}</p>
							<Image
								width="90"
								height="90"
								src="/icons/accurate.svg"
								alt="Accurate Icon"
							/>
						</div>
						<div className={styles.feature}>
							<h2>{t.dfc.features.list[1].title}</h2>
							<p>{t.dfc.features.list[1].description}</p>
							<Image
								width="90"
								height="90"
								src="/icons/network.svg"
								alt="Network Icon"
							/>
						</div>
						<div className={styles.feature}>
							<h2>{t.dfc.features.list[2].title}</h2>
							<p>{t.dfc.features.list[2].description}</p>
							<Image
								width="90"
								height="90"
								src="/icons/update.svg"
								alt="Update Icon"
							/>
						</div>
					</div>
				</section>
				<section className={styles.stats}>
					<div className={styles.stat}>
						<div className={styles.stat_info}>
							<h2>{t.dfc.stats[0].title}</h2>
							<h1>{t.dfc.stats[0].description}</h1>
						</div>
					</div>
					<i></i>
					<div className={styles.stat}>
						<div className={styles.stat_info}>
							<h2>{t.dfc.stats[1].title}</h2>
							<h1>{t.dfc.stats[1].description}</h1>
						</div>
					</div>
					<i></i>
					<div className={styles.stat}>
						<div className={styles.stat_info}>
							<h2>{t.dfc.stats[2].title}</h2>
							<h1>{t.dfc.stats[2].description}</h1>
						</div>
					</div>
				</section>
				<section className={styles.about}>
					<h1>{t.dfc.reason.title}</h1>
					<p>{t.dfc.reason.description}</p>
				</section>
				<section className={styles.figures}>
					<figure >
						<Image
							src={locale === "ar" ? riots_ar : riots_en}
							alt="Trulli"
							
						/>
						<figcaption >{t.dfc.figures.riots}</figcaption>
					</figure>
					<figure>
						<Image
							src={locale === "ar" ? poli_ar : poli_en}
							alt="Trulli"
						/>
						<figcaption >{t.dfc.figures.repression}</figcaption>
					</figure>
				</section>
				<section className={styles.cta}>
					<Button text={t.common.registerNow} color="#FCB03F" bgc="#10324F">
						<Link href="https://almanassa.exploredata.site/">
							{t.dfc.contact.button}
						</Link>
					</Button>
					<p>
						{t.dfc.contact.title}
						<br />
						<span>{t.dfc.contact.info}</span>
					</p>
				</section>
			</main>
		</>
	);
};
export async function getServerSideProps(ctx) {
	const jwt =
		parseCookies(ctx).jwt !== undefined ? parseCookies(ctx.jwt) : null;
	/* const api = process.env.NEXT_PUBLIC_API_URL;
	const res = await fetch(`${api}/dfc`);
	const content = await res.json(); */
	return {
		props: {
			// serverContent: content,
			jwt: jwt,
		},
	};
}
export default DataForChange;
