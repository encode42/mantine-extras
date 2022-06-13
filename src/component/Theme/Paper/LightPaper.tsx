import React from "react";
import { SharedPaperProps } from "@mantine/core";
import { MergedPaper } from "./MergedPaper";

/**
 * A light-themed {@link https://mantine.dev/core/paper Paper} component.
 */
export function LightPaper({ withBorder = true, ...other }: SharedPaperProps) {
    return (
        <MergedPaper withBorder={withBorder} {...other} themeSx={theme => ({
            "background": theme.colors.gray[1]
        })} />
    );
}
