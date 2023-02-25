import React from "react";
import cn from "classnames";
const CardTitle = ({ category, text, className }) => {
	return (
		<div className={cn(className)}>
			<p className={"mb-1 text-xs font-semibold text-gray-400 uppercase"}>
				{category}
			</p>
			<h1 className="text-md font-bold">{text}</h1>
		</div>
	);
};

export default CardTitle;
