import { Indicator as MantineIndicator, IndicatorProps as MantineIndicatorProps, MantineColor } from "@mantine/core";
import { mergeStyles } from "../../util";

/**
 * Options for the {@link Indicator} component.
 */
export interface IndicatorProps extends MantineIndicatorProps {
    /**
     * Color that borders the indicator.
     */
    "backgroundColor": MantineColor
}

/**
 * Mantine UI's [Indicator](https://mantine.dev/core/indicator) with a border around the indicator.
 */
export function Indicator({ color = "brand", size = 26, offset = 4, withBorder = true, styles = {}, backgroundColor, ...other }: IndicatorProps) {
    return (
        <MantineIndicator color={color} size={size} offset={offset} withBorder={withBorder} styles={mergeStyles(theme => ({
            "indicator": {
                "borderWidth": theme.spacing.sm / 4,
                "borderColor": backgroundColor
            }
        }), styles)} {...other} />
    );
}
