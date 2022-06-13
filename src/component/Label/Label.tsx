import React, { PropsWithChildren, ReactElement } from "react";
import { Group, Stack, Text } from "@mantine/core";

/**
 * Options for the {@link Label} component.
 */
export interface LabelProps extends Partial<PropsWithChildren> {
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
        <Stack spacing={5}>
            <Group spacing={5}>
                {typeof label !== "string" ? label : (
                    <Text size="sm">{label}</Text>
                )}
                {icon}
            </Group>
            {children}
        </Stack>
    );
}
