import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "./Icon";

const Button = ({ text, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"bg-blue text-white w-32 h-13 rounded-3xl  justify-center items-center text-2xs font-semibold flex flex-row gap-2 uppercase",
				className
			)}
		>
			{text}
			<Icon name="Arrow" width={20} height={20} />
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Button;
