import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * withFontTachyons is a higher order function that return a component with tachyon-like props related to fonts
 * It provides a color theme for text components.
 * It also provides a fw(font-weight) and caps props
 */
function withFontTachyons(FontTachyonsComponent) {
	class FontTachyonsWrapper extends PureComponent {
		static propTypes = {
			/**
			 * color property
			 */
			color: PropTypes.oneOf([
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
				"inherit"
			]),
			/**
			 * font-weight property
			 */
			fw: PropTypes.oneOf([
				"thin",
				"normal",
				"bold"
			]),
			/**
			 * font-style property
			 */
			fs: PropTypes.oneOf([
				"italic",
				"normal",
				"oblique"
			]),
			/**
			 * Determines whether letters are capitalized
			 */
			caps: PropTypes.bool,
			/**
			 * Custom class name
			 */
			className: PropTypes.string
		}

		render() {
			const {
				className,
				color,
				fw,
				fs,
				caps,
				...rest
			} = this.props;
			const fontClasses = classNames({
				[`${className}`]: className,
				[`as-${color}`]: color,
				[`as-fw-${fw}`]: fw,
				[`as-fs-${fs}`]: fs,
				"as-caps": caps
			});

			return (
				<FontTachyonsComponent {...rest} className={fontClasses} />
			);
		}
	}

	return FontTachyonsWrapper;
}

export default withFontTachyons;
