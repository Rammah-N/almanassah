/* eslint-disable @next/next/no-img-element */
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import styles from "../../styles/SpaceComponent.module.scss";
const Space = ({ title, description, link, img, flip, map, reserveLink }) => {
	return (
		<div className={styles.space}>
			<img src={img} alt={`${title} space`} />
			<div className={styles.info} style={{ order: flip ? `${1}` : `${2}` }}>
				<h2>{title}</h2>
				<section className={styles.info_icons}>
					<Image src="/icons/mute.svg" alt="Icon" width="20" height="20" />
					<Image src="/icons/book.svg" alt="Icon" width="20" height="20" />
					<Image src="/icons/cable.svg" alt="Icon" width="20" height="20" />
					<Image src="/icons/wifi.svg" alt="Icon" width="20" height="20" />
				</section>
				{map ? (
					<iframe
						src={map}
						style={{
							border: "0",
							width: "100%",
							height: "100%",
							marginTop: "1rem",
						}}
						allowFullScreen=""
						loading="lazy"></iframe>
				) : null}
			</div>
		</div>
	);
};

export default Space;
