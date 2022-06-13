import React, { PropsWithChildren, ReactNode } from "react";
import { Collapse, Stack, TextProps } from "@mantine/core";
import { Caption } from "./Caption";

/**
 * Options for the {@link CaptionWrapper} component.
 */
export interface CaptionWrapperProps extends TextProps<"div"> {
    /**
     * Text to wrap with the {@link Caption} component.
     */
    "caption"?: ReactNode,

    /**
     * Whether the caption is displayed.
     */
    "opened"?: boolean
}

/**
 * A component wrapper for {@link Caption}.
 *
 * Used to display a caption beneath a component with controllable visibility.
 */
export function CaptionWrapper({ children, caption, opened = true, ...other }: PropsWithChildren<CaptionWrapperProps>) {
    return (
        <Stack spacing={0} {...other}>
            {children}
            <Collapse in={opened}>
                <Caption>
                    {caption}
                </Caption>
            </Collapse>
        </Stack>
    );
}
