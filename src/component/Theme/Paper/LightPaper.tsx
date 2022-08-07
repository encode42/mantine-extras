import React from "react";
import { MergedPaper } from "./MergedPaper";
import { ThemePaperProps } from "../../../util";

/**
 * A light-themed [Paper](https://mantine.dev/core/paper) component.
 */
export function LightPaper({ withBorder = true, ...other }: ThemePaperProps) {
    return (
        <MergedPaper withBorder={withBorder} {...other} themeSx={theme => ({
            "background": theme.colors.gray[1]
        })} />
    );
}
