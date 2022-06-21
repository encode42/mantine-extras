import React from "react";
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core";
import { mergeSx, SxOperations } from "../../util";

/**
 * Options for the {@link Button} component.
 */
export interface ButtonProps extends MantineButtonProps<"button"> {
    /**
     * Sets button height to 100% of parent element.
     */
    "fullHeight"?: boolean
}

/**
 * Available sx operations.
 */
const operations: SxOperations = {
    "fullHeight": {
        "height": "100%"
    }
};

/**
 * An improved {@link https://mantine.dev/core/button Button} component.
 */
export function Button({ fullHeight, sx, ...other }: ButtonProps) {
    // Apply fullHeight operation
    if (fullHeight) {
        sx = mergeSx(operations.stretch, sx);
    }

    return (
        <MantineButton sx={sx} {...other} />
    );
}
