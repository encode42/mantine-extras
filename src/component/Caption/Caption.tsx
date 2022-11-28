import React from "react";
import { SharedCaptionProps } from "../../util";
import { CaptionLabel } from "./CaptionLabel";
import { CaptionWrapper } from "./CaptionWrapper/CaptionWrapper";

const _Caption = (({ ...other }: SharedCaptionProps) => {
    return <CaptionLabel {...other} />;
}) as any;

_Caption.Wrapper = CaptionWrapper;

export const Caption = _Caption;
