import React, { ReactElement } from "react";
import { Group } from "@mantine/core";

/**
 * Options for the SideBySide component.
 */
export interface SideBySideProps {
    /**
     * Children to display on the left side of the parent.
     */
    "leftSide": ReactElement | ReactElement[],

    /**
     * Children to display on the right side of the parent.
     */
    "rightSide": ReactElement | ReactElement[]
}

/**
 * A component that displays two rows of items on either side of their parent.
 */
export function SideBySide({ leftSide, rightSide }: SideBySideProps): ReactElement {
    return (
        <Group noWrap>
            <Group>{leftSide}</Group>
            <Group sx={{
                "marginLeft": "auto"
            }}>{rightSide}</Group>
        </Group>
    );
}
