import React from "react";
import PropTypes from "prop-types";

const Tag = ({ name }) => {
	return (
		<div className="h-7 border border-blue rounded-lg flex justify-center items-center px-2">
			<p className="text-blue uppercase text-2xs font-semibold ">{name}</p>
		</div>
	);
};

Tag.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Tag;
