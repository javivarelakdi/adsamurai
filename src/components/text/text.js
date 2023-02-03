import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withFontTachyons from "../withFontTachyons/withFontTachyons";
import withSpacingTachyons from "../withSpacingTachyons/withSpacingTachyons";

/**
 * Text component returning either `<p>` or `<span>` tag by default. Its sizing theme can be customized by
 * overwriting the following class names:
 *
 * - .as-txt--f1
 * - .as-txt--f2
 * - .as-txt--f3
 * - .as-txt--f4
 * - .as-txt--f5
 * - .as-txt--f6
 *
 * It is wrapped with withFontTachyons that give us a color, fw(font-weight), and caps props.
 * Also, it is decorated with [withSpacingTachyons](#withSpacingTachyons)
 * so it has all the padding and margin tachyons-like props.
 */
function Text({
	children,
	tagName = "span",
	sizing = "f2",
	spacing = "normal",
	truncated = false,
	bold = false,
	className = "",
	role = "",
	ariaAtomic = false,
	ariaLive = "off",
}) {
	const SpecificElement = tagName;

	const textClasses = classNames({
		[`${className}`]: className,
		"as-txt": true,
		[`as-txt--${sizing}`]: true,
		"as-txt--bold": bold,
		"as-txt--truncated": truncated,
		[`as-txt--${spacing}`]: true
	});

	return (
		<>
			<SpecificElement
				className={textClasses}
				role={role}
				aria-atomic={ariaAtomic}
				aria-live={ariaLive}>
				{children}
			</SpecificElement>
		</>
	);
}

Text.propTypes = {
	/**
	 * Children, text that will get displayed
	 */
	children: PropTypes.node,
	/**
	 * Html tag
	 */
	tagName: PropTypes.oneOf(["span", "p", "h1", "h2", "h3"]),
	/**
	 * Text sizing
	 */
	sizing: PropTypes.oneOf(["f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7"]),
	/**
	 * Text spacing
	*/
	spacing: PropTypes.oneOf(["normal", "thin", "wide"]),
	/**
	 * Determines whether the text is truncated
	 */
	truncated: PropTypes.bool,
	/**
	 * Determines whether the text is bold
	 */
	bold: PropTypes.bool,
	/**
	 * Custom class name
	 */
	className: PropTypes.string,
	/**
	 * role prop
	 */
	role: PropTypes.string,
	/**
	 * aria-atomic prop
	 */
	ariaAtomic: PropTypes.bool,
	/**
	 * aria-live prop
	 */
	ariaLive: PropTypes.oneOf(["off", "polite", "assertive", "rude"]),
};

// Unwrapped component export needed to show correctly the props table in Storybook
// https://github.com/storybookjs/storybook/issues/9023
export { Text };
export default withSpacingTachyons(withFontTachyons(Text));
