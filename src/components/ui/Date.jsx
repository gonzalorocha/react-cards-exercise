import React from "react";
import { formatDate } from "utils/formatter";
const Date = ({ date }) => {
	return <p>{formatDate(date)}</p>;
};

export default Date;
