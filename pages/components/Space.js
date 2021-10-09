import Image from "next/dist/client/image";
import Button from "./Button";
import Link from "next/dist/client/link";
import styles from "../../styles/SpaceComponent.module.scss";
const Space = ({ title, description, link, img, flip }) => {
	return (
		<div className={styles.space}>
			<img src={img} alt={`${title} space`} />
			<div className={styles.info} style={{ order: flip ? `${1}` : `${2}` }}>
				<h2>{title}</h2>
				<p>{description}</p>
				<section className={styles.info_icons}>
					<Image src="/icons/mute.svg" alt="Icon" width="20" height="20" />
					<Image src="/icons/book.svg" alt="Icon" width="20" height="20" />
					<Image src="/icons/cable.svg" alt="Icon" width="20" height="20" />
					<Image src="/icons/wifi.svg" alt="Icon" width="20" height="20" />
				</section>
				<Link href={link} passHref>
					<button>الحجز الآن</button>
				</Link>
			</div>
		</div>
	);
};

export default Space;
