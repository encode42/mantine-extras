import React from "react";
import { Box, ThemeIcon } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import deepmerge from "deepmerge";
import ReactPlayer from "react-player";
import { mergeSx, SharedVideoProps } from "../../util";

/**
 * A versatile video component.
 *
 * @see [ReactPlayer](https://github.com/CookPete/react-player)
 */
export function VideoPlayer({ sx, videoProps = {}, radius = "xl", url, ...other }: SharedVideoProps) {
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
