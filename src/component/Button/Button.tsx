import React, { forwardRef } from "react";
import { Button as MantineButton, ButtonProps as MantineButtonProps, createPolymorphicComponent } from "@mantine/core";
import { mergeSx, SxOperations } from "../../util";

/**
 * Options for the {@link Button} component.
 */
export interface ButtonProps extends MantineButtonProps {
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
 * An improved [Button](https://mantine.dev/core/button) component.
 */
const _Button = forwardRef<HTMLButtonElement, ButtonProps>(({ fullHeight, sx, ...other }, ref) => {
    // Apply fullHeight operation
    if (fullHeight) {
        sx = mergeSx(operations.stretch, sx);
    }

    return (
        <MantineButton ref={ref} sx={sx} {...other} />
    );
});

export const Button = createPolymorphicComponent<"button", ButtonProps>(_Button);
