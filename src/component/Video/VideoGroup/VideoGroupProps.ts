import { GroupProps } from "@mantine/core";
import { SharedVideoProps } from "../../../util";

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
