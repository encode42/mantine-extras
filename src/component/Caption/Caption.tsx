import React, { forwardRef } from "react";
import { SharedCaptionProps } from "../../util";
import { CaptionLabel } from "./CaptionLabel";
import { CaptionWrapper } from "./CaptionWrapper";
import { createPolymorphicComponent } from "@mantine/core";

const _Caption = forwardRef<HTMLParagraphElement, SharedCaptionProps>(({ ...other }, ref) => {
    return <CaptionLabel ref={ref} {...other} />;
}) as any;

_Caption.Wrapper = CaptionWrapper;

export const Caption = createPolymorphicComponent<"p", SharedCaptionProps>(_Caption);
