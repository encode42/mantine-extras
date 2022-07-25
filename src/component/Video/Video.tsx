import { SharedVideoProps } from "../../util";
import { VideoPlayer } from "./VideoPlayer";
import React from "react";
import { VideoGroup } from "./VideoGroup/VideoGroup";

const _Video = (({...other}: SharedVideoProps) => {
    return <VideoPlayer {...other} />;
}) as any;

_Video.Group = VideoGroup;

export const Video = _Video;
