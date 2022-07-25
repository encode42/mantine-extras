import { useMantineTheme } from "@mantine/core";
import { StyleType } from "../type/StyleType";
import { merge } from "./merge";

/**
 * Parse Mantine's style object.
 */
export function parseStyles(style: StyleType) {
    const theme = useMantineTheme();

    // Object is a function with theme arg
    if (typeof style === "function") {
        return style(theme, null);
    }

    return style;
}

/**
 * Merge and parse multiple style objects.
 */
export function mergeStyles(...style: StyleType[]) {
    return merge(style, parseStyles);
}
