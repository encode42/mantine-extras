import React from "react";
import { InputWrapperBaseProps, SliderProps as MantineSliderProps, Slider as MantineSlider, Input, GroupProps } from "@mantine/core";
import { mergeSx } from "../../util";

/**
 * Options for the {@link Slider} component.
 */
export interface SliderProps extends MantineSliderProps {
    /**
     * Input label, displayed before input.
     */
    "label"?: InputWrapperBaseProps["label"],

    /**
     * Function to generate label or any react node to render instead, set to null to disable label.
     */
    "hoverLabel"?: MantineSliderProps["label"],

    /**
     * Input description, displayed after label.
     */
    "description"?: InputWrapperBaseProps["description"],

    /**
     * Defines flex-grow property for each element, true -> 1, false -> 0
     */
    "grow"?: GroupProps["grow"]
}

/**
 * Mantine UI's {@link https://mantine.dev/core/slider Slider} wrapped in an {@link https://mantine.dev/core/input-wrapper InputWrapper}.
 */
export function Slider({ label, hoverLabel, description, grow = false, sx, ...other }: SliderProps) {
    return (
        <Input.Wrapper label={label} description={description} sx={{
            "flexGrow": grow ? 1 : 0
        }}>
            <MantineSlider label={hoverLabel} sx={mergeSx({
                "flexGrow": grow ? 1 : 0
            }, sx)} {...other} />
        </Input.Wrapper>
    );
}
