import React, { forwardRef, ReactNode } from "react";
import { Collapse, createPolymorphicComponent, Stack } from "@mantine/core";
import { CaptionLabel } from "./CaptionLabel";
import { SharedCaptionProps } from "../../util";

/**
 * Options for the {@link CaptionWrapper} component.
 */
export interface CaptionWrapperProps extends SharedCaptionProps {
    /**
     * Text to wrap with the {@link CaptionLabel} component.
     */
    "caption"?: ReactNode,

    /**
     * Whether the caption is displayed.
     */
    "opened"?: boolean
}

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
