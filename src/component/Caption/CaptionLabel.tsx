import React, { forwardRef } from "react";
import { createPolymorphicComponent, Text } from "@mantine/core";
import { mergeSx, SharedCaptionProps } from "../../util";

/**
 * A muted caption component.
 */
const _CaptionLabel = forwardRef<HTMLParagraphElement, SharedCaptionProps>(({ size = "sm", sx, ...other }, ref) => {
    return (
        <Text ref={ref} sx={mergeSx(theme => ({
            "color": `${theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6]}`,
            "fontSize": theme.fn.size({ size, "sizes": theme.fontSizes }) - 2,
            "marginTop": 7
        }), sx)} {...other} />
    );
}) as any;

export const CaptionLabel = createPolymorphicComponent<"p", SharedCaptionProps>(_CaptionLabel);
