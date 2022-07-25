import React from "react";
import { useMantineColorScheme, PaperProps } from "@mantine/core";
import { DarkPaper } from "./DarkPaper";
import { LightPaper } from "./LightPaper";

/**
 * A {@link https://mantine.dev/core/paper Paper} component that automatically changes with the theme.
 */
export function ThemePaper({ ...other }: PaperProps) {
    const { colorScheme } = useMantineColorScheme();

    return (
        colorScheme === "dark" ? (
            <DarkPaper {...other} />
        ) : (
            <LightPaper {...other} />
        )
    );
}
