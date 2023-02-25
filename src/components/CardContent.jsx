import React from "react";
import Icon from "./ui/Icon";
import Tag from "./ui/Tag";
const CardContent = ({ location, date, tags = [] }) => {
	return (
		<div>
			<p className="flex flex-row gap-2 text-gray-500 text-sm">
				<Icon name="Location" />
				{location}
			</p>
			<p className="flex flex-row gap-2 text-gray-500 text-sm mt-3">
				<Icon name="Calendar" />
				{date}
			</p>
			<div className="flex flex-row gap-1 mt-3">
				{tags.map((tag) => (
					<Tag name={tag} />
				))}
			</div>
		</div>
	);
};

export default CardContent;
