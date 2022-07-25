import React from "react";
import { Group, GroupProps } from "@mantine/core";
import { Video, VideoProps } from "./Video";
import { mergeSx } from "../../util";

/**
 * Options for the {@link VideoGroup} component.
 */
export interface VideoGroupProps extends Omit<GroupProps, "children"> {
    /**
     * Array of video URLs to display.
     */
    "urls": VideoProps["url"][],

    /**
     * Properties of the {@link Video} components.
     */
    "videoProps": Omit<VideoProps, "url">
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
                <Video key={i} url={video} {...videoProps} />
            ))}
        </Group>
    );
}
