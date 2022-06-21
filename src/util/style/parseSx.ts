import { CSSObject, useMantineTheme } from "@mantine/core";
import { SxType } from "../type/SxType";
import { merge } from "./merge";

/**
 * Parse Mantine's SX object.
 */
export function parseSx(sx: SxType): CSSObject {
    const theme = useMantineTheme();

    // Object is a function with theme arg
    if (typeof sx === "function") {
        return sx(theme);
    }

    // Object is an array of objects
    if (Array.isArray(sx)) {
        let newSx = {};

        for (const entry of sx) {
            newSx = {
                ...newSx,
                ...parseSx(entry)
            };
        }

        return newSx;
    }

    // Object is already parsed
    return sx ?? {};
}

/**
 * Merge and parse multiple SX objects.
 */
export function mergeSx(...sx: SxType[]) {
    return merge(sx, parseSx);
}
