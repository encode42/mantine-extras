import React, { forwardRef } from "react";
import { Group, SelectItemProps, Text } from "@mantine/core";
import { Caption } from "../Caption";

/**
 * Properties of a SelectDescription.
 */
export interface SelectDescriptionProps extends SelectItemProps {
    /**
     * The description that will be displayed.
     */
    "description": string
}

/**
 * A select item with a description.
 */
function SelectDescriptionRef({ label, description, ...others }, ref) {
    return (
        <div ref={ref} {...others}>
            <Group direction="column" spacing={0} noWrap>
                <Text>{label}</Text>
                <Caption>{description}</Caption>
            </Group>
        </div>
    );
}

export const SelectDescription = forwardRef(SelectDescriptionRef);
