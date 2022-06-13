import React from "react";
import { Box, BoxProps, MantineNumberSize, ThemeIcon } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import deepmerge from "deepmerge";
import ReactPlayer, { ReactPlayerProps } from "react-player";

/**
 * Options for the {@link Video} component.
 */
export interface VideoProps extends ReactPlayerProps {
    /**
     * Radius of the component.
     */
    "radius"?: MantineNumberSize,

    /**
     * Properties of the {@link https://mantine.dev/core/box Box} component.
     */
    "boxProps"?: BoxProps<"div">
}

/**
 * A versatile video component.
 *
 * @see {@link https://github.com/CookPete/react-player ReactPlayer}
 */
export function Video({
    width = "100%",
    height = "100%",
    controls = true,
    playsinline = true,
    light = true,
    playIcon = (
        <ThemeIcon>
            <IconPlayerPlay />
        </ThemeIcon>
    ),
    config,
    boxProps,
    radius = "xl",
    ...other
}: VideoProps) {
    config = deepmerge({
        "youtube": {
            "playervars": {
                "modestbranding": 1,
                "rel": 0
            }
        }
    }, config);

    boxProps = deepmerge({
        "sx": {
            "borderRadius": radius
        }
    }, boxProps);

    return (
        <Box {...boxProps}>
            <ReactPlayer width={width} height={height} controls={controls} playsinline={playsinline} light={light} playIcon={playIcon} config={config} {...other} />
        </Box>
    );
}
