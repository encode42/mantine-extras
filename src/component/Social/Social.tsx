import React, { cloneElement, forwardRef, ReactElement } from "react";
import { ActionIcon, ActionIconProps, Anchor, AnchorProps, createPolymorphicComponent, useMantineTheme } from "@mantine/core";
import { TablerIconProps } from "@tabler/icons";
import deepmerge from "deepmerge";

type PropsType = AnchorProps & Partial<React.ComponentPropsWithoutRef<"a">>;

/**
 * Options for the {@link Social} component.
 */
export interface SocialProps extends PropsType {
    /**
     * Icon to display.
     *
     * Intended for use with {@see https://github.com/tabler/tabler-icons Tabler Icons}.
     */
    "icon": ReactElement,

    /**
     * Properties for the {@link icon}.
     */
    "iconProps"?: TablerIconProps,

    /**
     * Properties for the {@link https://mantine.dev/core/action-icon ActionIcon}.
     */
    "actionIconProps"?: ActionIconProps
}

/**
 * A button to link to social media.
 */
const _Social = forwardRef<HTMLButtonElement, SocialProps>(({ icon, iconProps = {}, actionIconProps = {}, href, target = "_blank", ...other}, ref) => {
    const theme = useMantineTheme();

    iconProps = deepmerge({
        "size": "unset",
        "color": theme.colors.gray[1],
        "stroke": 1.5
    }, iconProps);

    actionIconProps = deepmerge({
        "sx": {
            "svg:hover": {
                "stroke": `${theme.colors.gray[4]} !important`
            }
        },
        "size": "xl",
        "radius": "xl",
        "variant": "hover"
    }, actionIconProps);

    const themeIcon = cloneElement(icon, iconProps);

    const button = (
        <ActionIcon ref={ref} {...actionIconProps}>
            {themeIcon}
        </ActionIcon>
    );

    return (
        href ? (
            <Anchor href={href} target={target} {...other}>
                {button}
            </Anchor>
        ) : button
    );
});

export const Social = createPolymorphicComponent<"button", SocialProps>(_Social);
