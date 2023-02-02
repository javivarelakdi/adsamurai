import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withSpacingTachyons } from "../withSpacingTachyons/withSpacingTachyons";
/**
 * Regular Button component with a specific color theme. It is decorated with
 * [withSpacingTachyons](#withSpacingTachyons)
 * so it has all the padding and margin tachyons-like props.
 */
function Button({ children,
	className = "",
	ariaLabel = "",
	textAlign = "center",
	onClick = null,
	btnType = "primary",
	bold = true,
	pill = false,
	disabled = false,
	type = "button" }) {
	const btnClasses = classNames({
		[`${className}`]: className,
		"sf-n-button": true,
		[`sf-n-button--${btnType}`]: true,
		"sf-n-button--pill": pill,
		[`sf-n-ta-${textAlign}`]: textAlign,
		"sf-n-txt--bold": bold
	});

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={btnClasses}
			type={type}
			aria-label={ariaLabel}>
			{children}
		</button>
	);
}

Button.propTypes = {
	/**
	 * Click handler
	 */
	onClick: PropTypes.func,
	/**
	 * Determines button's color theme
	 */
	btnType: PropTypes.oneOf([
		"primary",
		"secondary",
		"tertiary",
		"danger"
	]),
	/**
	 * Determines whether the text is bold
	*/
	bold: PropTypes.bool,
	/**
	 * Determines whether the button has a pill or circle (if width is the same as height) shape
	 */
	pill: PropTypes.bool,
	/**
	 * Determines whether the button is disabled
	 */
	disabled: PropTypes.bool,
	/**
	 * button type attribute
	 */
	type: PropTypes.oneOf(["button", "submit", "reset"]),
	/**
	 * Custom class name
	 */
	className: PropTypes.string,
	/**
	 * Children
	 */
	children: PropTypes.node.isRequired,
	/**
	 * aria-label attribute for better accessibility
	 */
	ariaLabel: PropTypes.string,
	/**
	 * aria-label attribute for better accessibility
	 */
	textAlign: PropTypes.oneOf([
		"left",
		"center",
		"right",
		"inherit"
	])
};

// Unwrapped component export needed to show correctly the props table in Storybook
// https://github.com/storybookjs/storybook/issues/9023
export { Button };
export default withSpacingTachyons(Button);
