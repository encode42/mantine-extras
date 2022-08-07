import { PaperProps } from "@mantine/core";
import { ThemeSx } from "../../../component/Theme/interface/ThemeSx";

/**
 * Options for the {@link ThemePaper} component.
 */
export interface ThemePaperProps extends PaperProps, ThemeSx {
    /**
     * ID of the element.
     */
    "id"?: string
}
