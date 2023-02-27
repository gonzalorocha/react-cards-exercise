import React from "react";
import cn from "classnames";
import Icon from "./Icon";
const Button = ({ text, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"bg-blue-700 text-white w-32 h-11 rounded-3xl  justify-center items-center text-sm font-semibold flex flex-row gap-2 uppercase",
				className
			)}
		>
			{text}
			<Icon name="Arrow" width={20} height={20} />
		</button>
	);
};

export default Button;
