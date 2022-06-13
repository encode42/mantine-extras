import { CSSObject, Sx } from "@mantine/core";

/**
 * The SX type used by most Mantine UI components.
 */
export type SxType = CSSObject | Sx | (Sx | undefined)[] | undefined
