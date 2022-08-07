import React from "react";
import { useMantineColorScheme } from "@mantine/core";
import { DarkPaper } from "./DarkPaper";
import { LightPaper } from "./LightPaper";
import { ThemePaperProps } from "../../../util";

/**
 * A [Paper](https://mantine.dev/core/paper) component that automatically changes with the theme.
 */
export function ThemePaper({ ...other }: ThemePaperProps) {
    const { colorScheme } = useMantineColorScheme();

    return (
        colorScheme === "dark" ? (
            <DarkPaper {...other} />
        ) : (
            <LightPaper {...other} />
        )
    );
}
