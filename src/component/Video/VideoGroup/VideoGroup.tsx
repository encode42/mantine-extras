import React from "react";
import { Group } from "@mantine/core";
import { VideoPlayer } from "../VideoPlayer";
import { VideoGroupProps } from "./VideoGroupProps";
import { mergeSx } from "../../../util";
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
