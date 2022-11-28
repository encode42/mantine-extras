import React from "react";
import { ActionIcon, ActionIconProps, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun, TablerIconProps } from "@tabler/icons";

type PropsType = ActionIconProps & React.ComponentPropsWithoutRef<"button">

/**
 * Options for the {@link ThemeToggle} component.
 */
export interface ThemeToggleProps extends PropsType {
    /**
     * Options for the icon.
     */
    "iconProps"?: TablerIconProps
}

/**
 * Component to toggle the website's theme.
 */
export function ThemeToggle({ size = "xl", variant = "filled", onClick, iconProps, ...other }: ThemeToggleProps) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";

    return (
        <ActionIcon size={size} variant={variant} onClick={event => {
            toggleColorScheme();

            onClick?.(event);
        }} {...other}>
            {isDark ? <IconSun {...iconProps} /> : <IconMoon {...iconProps} />}
        </ActionIcon>
    );
}
