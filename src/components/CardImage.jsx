import React from "react";
import choco from "assets/choco.png";
import excursion from "assets/excursion.png";
import panoramic from "assets/panoramic.png";

const CardImage = ({ imageName }) => {
	const image = () => {
		switch (imageName) {
			case "choco":
				return <img src={choco} alt=""></img>;
			case "excursion":
				return <img src={excursion} alt=""></img>;

			default:
				return <img src={panoramic} alt=""></img>;
		}
	};
	return (
		<div className="w-full h-[250px] duration-300 bg-cover bg-position-center bg-no-repeat z-0">
			{image()}
		</div>
	);
};

export default CardImage;
