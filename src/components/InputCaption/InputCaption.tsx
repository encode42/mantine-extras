import React from "react";
import { Group } from "@mantine/core";
import { Caption, CaptionProps } from "../Caption";

/**
 * A caption text-based component attached to an input.
 */
export function InputCaption({ text, children }: CaptionProps) {
    return (
        <Group direction="column" spacing={2.5} grow>
            {children}

            <Caption text={text} />
        </Group>
    );
}
