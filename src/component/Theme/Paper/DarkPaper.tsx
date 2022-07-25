import React from "react";
import { PaperProps } from "@mantine/core";
import { MergedPaper } from "./MergedPaper";

/**
 * A dark-themed {@link https://mantine.dev/core/paper Paper} component.
 */
export function DarkPaper({ ...other }: PaperProps) {
    return (
        <MergedPaper {...other} themeSx={theme => ({
            "background": theme.colors.dark[8]
        })} />
    );
}
