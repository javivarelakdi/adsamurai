import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withSpacingTachyons from "../withSpacingTachyons/withSpacingTachyons";

/**
 * Box is a main Layout component used to create row and column components.
 * You can easily create a 12-column grid with the Box components and also add
 * any combination of background-color, border and border radius. Thanks to being
 * decorated with [withSpacingTachyons](#withSpacingTachyons), it has spacing props
 * to manage padding and margin consistently
 */
function Box({ children, bc, bg,
	alignSelf, justifyContent, alignItems, textAlign, flex,
	xsCol, smCol, mdCol, lgCol, xlCol,
	alpha = false,
	ba = false,
	br = false,
	bl = false,
	bb = false,
	bt = false,
	brad = 0,
	cursor = "default",
	className = "",
	disabled = false,
	tagName = "div",
	...rest }) {
	const boxClasses = classNames({
		[`${className}`]: className,

		[`as-col-${xsCol}`]: xsCol,
		[`as-col-sm-${smCol}`]: smCol,
		[`as-col-md-${mdCol}`]: mdCol,
		[`as-col-lg-${lgCol}`]: lgCol,
		[`as-col-xl-${xlCol}`]: xlCol,

		[`as-align-self-${alignSelf}`]: alignSelf,
		[`as-justify-content-${justifyContent}`]: justifyContent,
		[`as-align-items-${alignItems}`]: alignItems,
		[`as-flex-${flex}`]: flex,

		"as-ba": ba,
		"as-br": br,
		"as-bl": bl,
		"as-bb": bb,
		"as-bt": bt,

		[`as-bc-${bc}`]: bc,
		[`as-br${brad}`]: brad,
		[`as-bg-${bg}`]: bg,

		[`as-cursor-${cursor}`]: cursor,
		[`as-ta-${textAlign}`]: textAlign,
		"as-alpha": alpha,
		"as-disabled": disabled
	});
	const SpecificElement = tagName;

	return (
		<SpecificElement className={boxClasses} {...rest}>{children}</SpecificElement>
	);
}

Box.propTypes = {
	/**
	 * Number of columns on all screen widths
	 */
	xsCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8,
		9, 10, 11, 12, "auto", "fill"]),
	/**
	 * Number of columns on screen widths larger than 576px
	 */
	smCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8,
		9, 10, 11, 12, "auto", "fill"]),
	/**
	 * Number of columns on screen widths larger than 768px
	 */
	mdCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8,
		9, 10, 11, 12, "auto", "fill"]),
	/**
	 * Number of columns on screen widths larger than 992px
	 */
	lgCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8,
		9, 10, 11, 12, "auto", "fill"]),
	/**
	 * Number of columns on screen widths larger than 1200px
	 */
	xlCol: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8,
		9, 10, 11, 12, "auto", "fill"]),
	/**
	 * Alpha/Opacity for the content
	 */
	alpha: PropTypes.bool,
	/**
	 * align-self property, cross axis alignment set on a child element
	 */
	alignSelf: PropTypes.oneOf([
		"auto",
		"start",
		"center",
		"end",
		"baseline",
		"stretch"
	]),
	/**
	 * justify-content property, main axis alignment set on a parent element
	 */
	justifyContent: PropTypes.oneOf([
		"start",
		"center",
		"end",
		"between",
		"around"
	]),
	/**
	 * align-items property, cross axis alignment set on a parent element
	 */
	alignItems: PropTypes.oneOf([
		"start",
		"center",
		"end",
		"baseline",
		"stretch"
	]),
	/**
	 * flex-direction
	 */
	flex: PropTypes.oneOf([
		"row",
		"column",
		"nowrap",
		"row-reverse"
	]),

	/**
	 * Determines if all borders present
	 */
	ba: PropTypes.bool,
	/**
	 * Determines if border-right present
	 */
	br: PropTypes.bool,
	/**
	 * Determines if border-left present
	 */
	bl: PropTypes.bool,
	/**
	 * Determines if border-bottom present
	 */
	bb: PropTypes.bool,
	/**
	 * Determines if border-top present
	 */
	bt: PropTypes.bool,
	/**
	 * border-color property
	 */
	bc: PropTypes.oneOf([
		"primary-light",
		"primary-medium",
		"primary-dark",
		"secondary-light",
		"secondary-medium",
		"secondary-dark",
		"success-light",
		"success-medium",
		"success-dark",
		"danger-light",
		"danger-medium",
		"danger-dark",
		"transparent"
	]),
	/**
	 * border-radius property with the following scale: 2px, 4px, 8px, 16px, 100%
	 */
	brad: PropTypes.oneOf([0, 1, 2, 3, 4, 100]),
	/**
	 * background-color property
	 */
	bg: PropTypes.oneOf([
		"primary-light",
		"primary-medium",
		"primary-dark",
		"secondary-light",
		"secondary-medium",
		"secondary-dark",
		"success-light",
		"success-medium",
		"success-dark",
		"danger-light",
		"danger-medium",
		"danger-dark",
		"transparent"
	]),
	/**
	 * Determines cursor on mouse over
	 */
	cursor: PropTypes.oneOf(["pointer", "default"]),
	/**
	 * text-align property
	 */
	textAlign: PropTypes.oneOf([
		"left",
		"center",
		"right",
		"inherit"
	]),
	/**
	 * Custom class
	 */
	className: PropTypes.string,
	/**
	 * Disable all content
	 */
	disabled: PropTypes.bool,
	/**
	 * Tag name
	 */
	tagName: PropTypes.oneOf(["div", "span", "ul", "li"]),
	/**
	 * Children
	 */
	children: PropTypes.node
};

// Unwrapped component export needed to show correctly the props table in Storybook
// https://github.com/storybookjs/storybook/issues/9023
export { Box };
export default withSpacingTachyons(Box);
