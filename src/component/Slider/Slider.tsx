import React from "react";
import { InputWrapperBaseProps, SliderProps as MantineSliderProps, Slider as MantineSlider, Input } from "@mantine/core";

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
    "description"?: InputWrapperBaseProps["description"]
}

/**
 * Mantine UI's {@link https://mantine.dev/core/slider Slider} wrapped in an {@link https://mantine.dev/core/input-wrapper InputWrapper}.
 */
export function Slider({ label, hoverLabel, description, ...other }: SliderProps) {
    return (
        <Input.Wrapper label={label} description={description}>
            <MantineSlider label={hoverLabel} {...other} />
        </Input.Wrapper>
    );
}
