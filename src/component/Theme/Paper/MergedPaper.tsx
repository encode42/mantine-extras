import React from "react";
import { Paper, SharedPaperProps } from "@mantine/core";
import { ThemeSx } from "../interface/ThemeSx";
import { mergeSx } from "../../../util";

/**
 * Options for the {@link MergedPaper} component.
 */
interface MergedPaperProps extends SharedPaperProps, ThemeSx {}

/**
 * A standardized {@link https://mantine.dev/core/paper Paper} component.
 *
 * Intended for use within {@link DarkPaper} or {@link LightPaper}.
 */
export function MergedPaper({ children, themeSx, shadow = "xs", p = "md", sx, ...other }: MergedPaperProps) {
    return (
        <Paper shadow={shadow} p={p} sx={mergeSx(themeSx, sx)} {...other}>
            {children}
        </Paper>
    );
}
