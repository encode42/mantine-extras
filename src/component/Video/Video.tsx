import React from "react";
import { Box, BoxProps, MantineNumberSize, ThemeIcon } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import deepmerge from "deepmerge";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { mergeSx } from "../../util";

/**
 * Options for the {@link Video} component.
 */
export interface VideoProps extends BoxProps<"div"> {
    /**
     * Radius of the component.
     */
    "radius"?: MantineNumberSize,

    "url": ReactPlayerProps["url"],

    /**
     * Properties of the {@link https://mantine.dev/core/box Box} component.
     */
    "videoProps"?: Omit<ReactPlayerProps, "url">
}

/**
 * A versatile video component.
 *
 * @see {@link https://github.com/CookPete/react-player ReactPlayer}
 */
export function Video({ sx, videoProps = {}, radius = "xl", url, ...other }: VideoProps) {
    videoProps = deepmerge({
        "width": "100%",
        "height": "100%",
        "controls": true,
        "playsinline": true,
        "playIcon": (
            <ThemeIcon size="xl">
                <IconPlayerPlay />
            </ThemeIcon>
        ),
        "config": {
            "youtube": {
                "playervars": {
                    "modestbranding": 1,
                    "rel": 0
                }
            }
        },
    }, videoProps);

    return (
        <Box sx={mergeSx({
            "borderRadius": radius
        }, sx)} {...other}>
            <ReactPlayer url={url} {...videoProps} />
        </Box>
    );
}
