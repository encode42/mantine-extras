import React from "react";
import { useMantineTheme } from "@mantine/core";
import { PrismProps } from "@mantine/prism";
import { MergedPrism } from "./MergedPrism";

/**
 * A light-themed [Prism](https://mantine.dev/others/prism) component.
 */
export function LightPrism({ children, ...other }: PrismProps) {
    const theme = useMantineTheme();

    return (
        <MergedPrism themeStyles={{
            "code": {
                "background": `${theme.white} !important`,
                "border": `1px solid ${theme.colors.gray[4]}`
            },
            "copy": {
                "button": {
                    "background": theme.colors.gray[4],
                    "svg": {
                        "strokeWidth": 4
                    }
                },
                "button:hover": {
                    "background": theme.colors.gray[5]
                }
            }
        }} {...other}>
            {children}
        </MergedPrism>
    );
}
