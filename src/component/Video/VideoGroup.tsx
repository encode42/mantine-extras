import React from "react";
import { Group, GroupProps } from "@mantine/core";
import { VideoPlayer } from "./VideoPlayer";
import { mergeSx, SharedVideoProps } from "../../util";

/**
 * Options for the {@link VideoGroup} component.
 */
export interface VideoGroupProps extends Omit<GroupProps, "children"> {
    /**
     * Array of video URLs to display.
     */
    "urls": SharedVideoProps["url"][],

    /**
     * Properties of the {@link VideoPlayer} components.
     */
    "videoProps": Omit<SharedVideoProps, "url">
}

/**
 * A group of equally-spaced videos.
 *
 * @see VideoGroupProps
 */
export function VideoGroup({ urls, videoProps, grow = true, sx, ...other }: VideoGroupProps) {
    return (
        <Group grow={grow} sx={mergeSx({
            "width": "100%"
        }, sx)} {...other}>
            {urls.map((video, i) => (
                <VideoPlayer key={i} url={video} {...videoProps} />
            ))}
        </Group>
    );
}
