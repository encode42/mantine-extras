import React from "react";
import { MergedPaper } from "./MergedPaper";
import { ThemePaperProps } from "../../../util";

/**
 * A dark-themed [Paper](https://mantine.dev/core/paper) component.
 */
export function DarkPaper({ ...other }: ThemePaperProps) {
    return (
        <MergedPaper {...other} themeSx={theme => ({
            "background": theme.colors.dark[8]
        })} />
    );
}
