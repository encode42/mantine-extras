import React from "react";
import { Group as MantineGroup, GroupProps as MantineGroupProps } from "@mantine/core";
import { mergeSx, SxOperations, SxType } from "../../util";

/**
 * Options for the {@link Group} component.
 */
export interface GroupProps extends MantineGroupProps {
    /**
     * Whether the children should be stretched.
     */
    "stretch"?: boolean
}

/**
 * Available sx operations.
 */
const operations: SxOperations = {
    "stretch": {
        "alignItems": "stretch"
    }
};

/**
 * An improved {@link https://mantine.dev/core/group Group} component.
 */
export function Group({ stretch, sx, ...other }: GroupProps) {
    // Apply stretch operation
    if (stretch) {
        sx = mergeSx(operations.stretch, sx);
    }

    return (
        <MantineGroup sx={sx} {...other} />
    );
}
