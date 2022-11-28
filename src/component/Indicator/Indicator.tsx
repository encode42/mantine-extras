import { Indicator as MantineIndicator, IndicatorProps } from "@mantine/core";
import { mergeStyles } from "../../util";

export function Indicator({ color = "brand", size = 26, offset = 4, withBorder = true, styles = {}, ...other }: IndicatorProps) {
    return (
        <MantineIndicator color={color} size={size} offset={offset} withBorder={withBorder} styles={mergeStyles(theme => ({
            "indicator": {
                "borderWidth": theme.spacing.sm / 4,
                "borderColor": theme.colors.dark[8]
            }
        }), styles)} {...other} />
    );
}
