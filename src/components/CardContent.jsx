import React from "react";
import PropTypes from "prop-types";
import Icon from "./ui/Icon";
import Tag from "./ui/Tag";
import Date from "./ui/Date";

const CardContent = ({ location, date, tags = [] }) => {
	return (
		<div>
			<div className="flex flex-row gap-2 text-gray-500 text-md">
				<Icon name="Location" />
				{location}
			</div>
			<div className="flex flex-row gap-2 text-gray-500 text-md mt-3">
				<Icon name="Calendar" />
				<Date date={date} />
			</div>
			<div className="flex flex-row gap-1 mt-3">
				{tags.map((tag) => (
					<Tag key={tag} name={tag} />
				))}
			</div>
		</div>
	);
};

CardContent.propTypes = {
	location: PropTypes.string.isRequired,
	date: [PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]
		.isRequired,
	tags: PropTypes.array,
};

export default CardContent;
