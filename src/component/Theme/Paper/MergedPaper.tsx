import React from "react";
import { Paper } from "@mantine/core";
import { ThemeSx } from "../interface/ThemeSx";
import { mergeSx, ThemePaperProps } from "../../../util";

/**
 * Options for the {@link MergedPaper} component.
 */
interface MergedPaperProps extends ThemePaperProps, ThemeSx {}

/**
 * A standardized [Paper](https://mantine.dev/core/paper) component.
 *
 * Intended for use within {@link DarkPaper} or {@link LightPaper}.
 */
export function MergedPaper({ children, themeSx, id, shadow = "xs", p = "md", sx, ...other }: MergedPaperProps) {
    return (
        <Paper id={id} shadow={shadow} p={p} sx={mergeSx(themeSx, sx)} {...other}>
            {children}
        </Paper>
    );
}
