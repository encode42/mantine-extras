import React from "react";
import { useMantineTheme } from "@mantine/core";
import { Prism, PrismProps } from "@mantine/prism";
import { ThemeStyles } from "../interface/ThemeStyles";
import { mergeStyles } from "../../../util";

/**
 * Options for the {@link MergedPrism} component.
 */
export interface MergedPrismProps extends PrismProps, ThemeStyles {}

/**
 * A standardized {@link https://mantine.dev/others/prism Prism} component.
 *
 * Intended for use within {@link DarkPrism} or {@link LightPrism}.
 */
export function MergedPrism({ themeStyles, styles, children, ...other }: Omit<MergedPrismProps, "withLineNumbers">) {
    const theme = useMantineTheme();

    return (
        <Prism withLineNumbers {...other} styles={mergeStyles({
            "copy": {
                "borderRadius": theme.radius.xs
            },
            "line": {
                "whiteSpace": "pre-wrap"
            }
        }, themeStyles, styles)}>
            {children}
        </Prism>
    );
}
