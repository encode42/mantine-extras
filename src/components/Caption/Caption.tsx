import React from "react";
import { Text } from "@mantine/core";
import { OptionalChildrenProps } from "../../utils";

/**
 * Properties of a caption.
 */
export interface CaptionProps extends OptionalChildrenProps {
    /**
     * Text of the caption.
     */
    "text"?: string
}

/**
 * A caption text-based component.
 */
export function Caption({ text, children }: CaptionProps) {
    return (
        <Text size="xs" color="dimmed">{text ?? children}</Text>
    );
}
