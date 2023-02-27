import { format } from "date-fns";

export const formatDate = (date, options = {}) => {
	let formatString = "d MMM yy";
	if (options.withTime) formatString += " HH:mm";
	return format(new Date(date), formatString);
};
