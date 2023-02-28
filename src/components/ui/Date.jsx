import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "utils/formatter";

const Date = ({ date, className }) => {
	return <p className={className}>{formatDate(date)}</p>;
};

Date.propTypes = {
	date: [PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]
		.isRequired,
	className: PropTypes.string,
};

export default Date;
