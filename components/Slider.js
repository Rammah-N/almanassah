import { Rerousel } from "rerousel";
import { useRef } from "react";
import UpdatesCard from "./UpdatesCard";
import documentIcon from "../public/icons/documentIcon.svg";
const Slider = ({ content }) => {
	const customerLogo = useRef(null);
	return (
		<div>
			<Rerousel itemRef={customerLogo} interval={2500}>
				{content?.map((item, i) => {
					return (
						<UpdatesCard
							refs={i == 0 ? customerLogo : null}
							key={i}
							title={item.Title}
							// tags={item.tags}
							img={documentIcon.src}
							link={`https://admin.almanassah-sd.org${item.Pdf.url}`}
						/>
					);
				})}
			</Rerousel>
		</div>
	);
};
export default Slider;
