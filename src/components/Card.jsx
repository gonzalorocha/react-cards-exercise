import React from "react";
import cn from "classnames";
import Button from "./ui/Button";
import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardContent from "./CardContent";

const Card = ({ className, data }) => {
	return (
		<div
			className={cn(
				"w-[310px] h-[550px] flex flex-col bg-white rounded-xl shadow-md",
				className
			)}
		>
			<CardImage imageName={data.imageName} />
			<div className={cn("px-7 py-3 h-full flex flex-col justify-between")}>
				<CardTitle category={data.category} text={data.title} />
				<CardContent
					location={data.location}
					date={data.date}
					tags={data.tags}
				/>
				<Button className="mb-2" text="ver más" onClick={() => null} />
			</div>
		</div>
	);
};

export default Card;
