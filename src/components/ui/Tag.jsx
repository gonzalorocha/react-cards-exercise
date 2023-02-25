import React from "react";

const Tag = ({ name }) => {
	return (
		<div className=" h-7  border-2 border-blue-700 rounded-lg flex justify-center items-center px-2">
			<p className="text-blue-700 uppercase text-xs font-semibold ">{name}</p>
		</div>
	);
};

export default Tag;
