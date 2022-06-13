import { CSSObject, MantineTheme } from "@mantine/core";

/**
 * The style type used by most Mantine UI components.
 */
export type StyleType = CSSObject | ((theme: MantineTheme) => CSSObject) | undefined;
