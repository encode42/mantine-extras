import React from "react";
import { Collapse, Stack } from "@mantine/core";
import { CaptionWrapperProps } from "./CaptionWrapperProps";
import { CaptionLabel } from "../CaptionLabel";

/**
 * A component wrapper for {@link CaptionLabel}.
 *
 * Used to display a caption beneath a component with controllable visibility.
 */
export function CaptionWrapper({ children, caption, opened = true, ...other }: CaptionWrapperProps) {
    return (
        <Stack spacing={0} {...other}>
            {children}
            <Collapse in={opened}>
                <CaptionLabel>
                    {caption}
                </CaptionLabel>
            </Collapse>
        </Stack>
    );
}
