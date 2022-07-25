import React, { forwardRef } from "react";
import { Collapse, createPolymorphicComponent, Stack } from "@mantine/core";
import { CaptionWrapperProps } from "./CaptionWrapperProps";
import { CaptionLabel } from "../CaptionLabel";

/**
 * A component wrapper for {@link CaptionLabel}.
 *
 * Used to display a caption beneath a component with controllable visibility.
 */
const _CaptionWrapper = forwardRef<HTMLParagraphElement, CaptionWrapperProps>(({ children, caption, opened = true, ...other }, ref) => {
    return (
        <Stack spacing={0} {...other}>
            {children}
            <Collapse in={opened}>
                <CaptionLabel ref={ref}>
                    {caption}
                </CaptionLabel>
            </Collapse>
        </Stack>
    );
});

export const CaptionWrapper = createPolymorphicComponent<"p", CaptionWrapperProps>(_CaptionWrapper);
