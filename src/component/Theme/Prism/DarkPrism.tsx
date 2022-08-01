import React from "react";
import { useMantineTheme } from "@mantine/core";
import { PrismProps } from "@mantine/prism";
import { MergedPrism } from "./MergedPrism";

/**
 * A dark-themed [Prism](https://mantine.dev/others/prism) component.
 */
export function DarkPrism({ children, ...other }: PrismProps) {
    const theme = useMantineTheme();

    return (
        <MergedPrism themeStyles={{
            "code": {
                "background": `${theme.colors.dark[5]} !important`
            },
            "copy": {
                "button": {
                    "background": theme.colors.dark[7]
                },
                "button:hover": {
                    "background": theme.colors.dark[8]
                }
            }
        }} {...other}>
            {children}
        </MergedPrism>
    );
}
