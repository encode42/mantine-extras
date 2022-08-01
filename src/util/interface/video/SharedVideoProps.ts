import { BoxProps, MantineNumberSize } from "@mantine/core";
import { ReactPlayerProps } from "react-player";

/**
 * Options for the {@link Video} component.
 */
export interface SharedVideoProps extends BoxProps {
    /**
     * Radius of the component.
     */
    "radius"?: MantineNumberSize,

    /**
     * URL of the video.
     */
    "url": ReactPlayerProps["url"],

    /**
     * Properties of the [Box](https://mantine.dev/core/box) component.
     */
    "videoProps"?: Omit<ReactPlayerProps, "url">
}
