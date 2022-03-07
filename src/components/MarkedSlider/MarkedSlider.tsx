import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Slider, SliderProps } from "@mantine/core";

/**
 * A marker for the slider.
 */
interface SliderMarker {
    "value": number,
    "label": ReactNode
}

/**
 * Options for the MarkedSlider component.
 */
export interface MarkedSliderOptions extends SliderProps {
    /**
     * Interval in which markers are generated.
     */
    "interval"?: number,

    /**
     * Function to generate label or any react node to render instead, set to null to disable label
     */
    "intervalLabel"?: (value: number) => ReactNode | null,

    /**
     * Whether to include markers at the start and end of the slider.
     */
    "includeEnds"?: boolean,
}

/**
 * A slider with generated markers.
 *
 * @see MarkedSliderOptions
 */
export function MarkedSlider({
    interval = 1,
    includeEnds = false,
    intervalLabel = value => value.toString(),
    step = 1,
    min = 0,
    max = 100,
    ...others
}: MarkedSliderOptions): ReactElement {
    // Generate the markers
    const [marks, setMarks] = useState<SliderMarker[]>([]);

    useEffect(() => {
        const newSliderMarks: SliderMarker[] = [];

        // Iterate each interval between min and max
        for (let i = min; i <= max; i += step) {
            const atEnds = i === min || i === max;

            // Check whether we're at the ends
            if (!includeEnds && atEnds) {
                continue;
            }

            if (i % interval === 0 || atEnds) {
                // Current value is divisible by interval
                newSliderMarks.push({
                    "value": i,
                    "label": intervalLabel?.(i) ?? null
                });
            }
        }

        setMarks(newSliderMarks);
    }, [interval, includeEnds, step, min, max]);

    return (
        <Slider marks={marks} step={step} min={min} max={max} {...others} />
    );
}
