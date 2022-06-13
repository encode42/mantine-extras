import React from "react";
import { Text, TextProps } from "@mantine/core";
import { mergeSx } from "../../util";

/**
 * A muted caption component.
 */
export function Caption({ size = "sm", sx, ...other }: TextProps<"div">) {
    return (
        <Text sx={mergeSx(theme => ({
            "color": `${theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]}`,
            "fontSize": theme.fn.size({ size, "sizes": theme.fontSizes }) - 2,
            "marginTop": 7
        }), sx)} {...other} />
    );
}
