import React, { ReactElement } from "react";
import { Group, Text } from "@mantine/core";
import { OptionalChildrenProps } from "../../utils";

/**
 * Properties of a Label
 */
export interface LabelProps extends OptionalChildrenProps {
    /**
     * The label that will be displayed above the input.
     *
     * Will be wrapped in a Text element if a string.
     */
    "label": string | ReactElement,

    /**
     * The icon that will be displayed next to the label.
     */
    "icon"?: ReactElement
}

/**
 * Component that contains a label for an input component.
 */
export function Label({ label, icon, children }: LabelProps) {
    return (
        <Group direction="column" grow spacing={5}>
            <Group spacing={5}>
                {typeof label !== "string" ? label : (
                    <Text size="sm">{label}</Text>
                )}
                {icon}
            </Group>

            {children}
        </Group>
    );
}
