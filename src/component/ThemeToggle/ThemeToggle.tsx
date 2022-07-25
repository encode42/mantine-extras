import React, { forwardRef } from "react";
import { ActionIcon, ActionIconProps, createPolymorphicComponent, useMantineColorScheme } from "@mantine/core";
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
const _ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(({ size = "xl", variant = "filled", onClick, iconProps, ...other }, ref) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";

    return (
        <ActionIcon ref={ref} size={size} variant={variant} onClick={event => {
            toggleColorScheme();

            onClick?.(event);
        }} {...other}>
            {isDark ? <IconSun {...iconProps} /> : <IconMoon {...iconProps} />}
        </ActionIcon>
    );
});

export const ThemeToggle = createPolymorphicComponent<"button", ThemeToggleProps>(_ThemeToggle);
