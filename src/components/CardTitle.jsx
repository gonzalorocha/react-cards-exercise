import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
const CardTitle = ({ category, text, className }) => {
	return (
		<div className={cn("h-32", className)}>
			<p className={"mb-1 text-md font-semibold text-gray-300 uppercase"}>
				{category}
			</p>
			<h1 className="text-xl font-bold">{text}</h1>
		</div>
	);
};

CardTitle.propTypes = {
	category: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default CardTitle;
