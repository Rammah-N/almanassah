import Image from "next/dist/client/image";
import Link from "next/link";
import documentIcon from "../public/icons/documentIcon.svg";
import styles from "../styles/ReportDocument.module.scss";
const ReportDocument = ({ type, title, month, year, link }) => {
	return (
		<div className={styles.report}>
			<h3>{type}</h3>
			<Image src={documentIcon} alt={title} width="100" height="100" />
			<Link href={`${process.env.NEXT_PUBLIC_API_URL}${link}`} passHref>
				<h2>{title}</h2>
			</Link>
			<span>
				{"January"}, {"2022"}
			</span>
		</div>
	);
};

export default ReportDocument;
