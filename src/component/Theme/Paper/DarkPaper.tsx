import React from "react";
import { PaperProps } from "@mantine/core";
import { MergedPaper } from "./MergedPaper";

/**
 * A dark-themed [Paper](https://mantine.dev/core/paper) component.
 */
export function DarkPaper({ ...other }: PaperProps) {
    return (
        <MergedPaper {...other} themeSx={theme => ({
            "background": theme.colors.dark[8]
        })} />
    );
}
