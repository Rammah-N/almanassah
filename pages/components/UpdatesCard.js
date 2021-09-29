/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/UpdatesCard.module.scss";
import Link from 'next/link'
const UpdatesCard = ({ title, tags, img, refs, link }) => {
	return (
		<div className={styles.card} ref={refs}>
			<img src={img} alt="" />
			<div className={styles.tags}>
				{tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</div>
			<Link href={link} passHref>
				<h2>{title}</h2>
			</Link>
		</div>
	);
};

export default UpdatesCard;
