import { ReactNode } from "react";
import { SharedCaptionProps } from "../../../util";

/**
 * Options for the {@link CaptionWrapper} component.
 */
export interface CaptionWrapperProps extends SharedCaptionProps {
    /**
     * Text to wrap with the {@link CaptionLabel} component.
     */
    "caption"?: ReactNode,

    /**
     * Whether the caption is displayed.
     */
    "opened"?: boolean
}
