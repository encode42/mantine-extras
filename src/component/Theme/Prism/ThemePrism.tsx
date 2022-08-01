import React from "react";
import { useMantineColorScheme } from "@mantine/core";
import { PrismProps } from "@mantine/prism";
import { DarkPrism } from "./DarkPrism";
import { LightPrism } from "./LightPrism";

/**
 * A [Prism](https://mantine.dev/others/prism) component that automatically changes with the theme.
 */
export function ThemePrism({ children, ...other }: PrismProps) {
    const { colorScheme } = useMantineColorScheme();

    return (
        colorScheme === "dark" ? (
            <DarkPrism {...other}>
                {children}
            </DarkPrism>
        ) : (
            <LightPrism {...other}>
                {children}
            </LightPrism>
        )
    );
}
