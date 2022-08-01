import React from "react";
import { PaperProps } from "@mantine/core";
import { MergedPaper } from "./MergedPaper";

/**
 * A light-themed [Paper](https://mantine.dev/core/paper) component.
 */
export function LightPaper({ withBorder = true, ...other }: PaperProps) {
    return (
        <MergedPaper withBorder={withBorder} {...other} themeSx={theme => ({
            "background": theme.colors.gray[1]
        })} />
    );
}
