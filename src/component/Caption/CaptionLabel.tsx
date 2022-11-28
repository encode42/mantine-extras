import React from "react";
import { Text } from "@mantine/core";
import { mergeSx, SharedCaptionProps } from "../../util";

/**
 * A muted caption component.
 */
export function CaptionLabel({ size = "sm", sx, ...other }: SharedCaptionProps) {
    return (
        <Text sx={mergeSx(theme => ({
            "color": `${theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]}`,
            "fontSize": theme.fn.size({ size, "sizes": theme.fontSizes }) - 2,
            "marginTop": 7
        }), sx)} {...other} />
    );
}
