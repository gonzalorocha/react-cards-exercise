import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ReactComponent as Arrow } from "assets/icons/arrow.svg";
import { ReactComponent as Calendar } from "assets/icons/calendar.svg";
import { ReactComponent as Location } from "assets/icons/location.svg";

const SvgIcons = {
	Arrow,
	Calendar,
	Location,
};

const Icon = ({
	name,
	className,
	width = 16,
	height = 16,
	canvasWidth,
	canvasHeight,
	...rest
}) => {
	const SvgIcon = SvgIcons[name];

	return (
		<div
			style={{ width: canvasWidth, height: canvasHeight }}
			className={cn(className)}
		>
			<SvgIcon
				width={width}
				height={height}
				aria-hidden="true"
				role="img"
				focusable={false}
				{...rest}
			/>
		</div>
	);
};

Icon.propTypes = {
	name: PropTypes.oneOf(Object.keys(SvgIcons)).isRequired,
	className: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	canvasWidth: PropTypes.number,
	canvasHeight: PropTypes.number,
};

export default Icon;
