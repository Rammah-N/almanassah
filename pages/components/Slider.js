import { Rerousel } from "rerousel";
import { useRef } from "react";
import UpdatesCard from "./UpdatesCard";
export const Slider = ({ content }) => {
	const customerLogo = useRef(null);

	return (
		<div>
			<Rerousel itemRef={customerLogo} interval={2500}>
				{content.map((item, i) => {
					return (
						<UpdatesCard
							refs={i == 0 ? customerLogo : null}
							key={i}
							title={item.title}
							tags={item.tags}
							img={item.img}
              link={item.link}
						/>
					);
				})}
			</Rerousel>
		</div>
	);
};
