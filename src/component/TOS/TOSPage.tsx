import React, { cloneElement, ReactElement, useState } from "react";
import { ModalProps, Stack, StackProps } from "@mantine/core";
import { mergeSx } from "../../util";

/**
 * Options for the {@link TOSPage} component.
 */
export interface TOSPageProps extends StackProps {
    /**
     * Modal to display.
     *
     * @see TOSModal
     */
    "tos": ReactElement,

    /**
     * Function to execute on modal close.
     */
    "onClose"?: ModalProps["onClose"]
}

/**
 * Page wrapper that doesn't display contents until a TOS is read.
 */
export function TOSPage({ tos, children, sx, onClose, ...other }: TOSPageProps) {
    const [agreed, setAgreed] = useState(false);

    return (
        <>
            <Stack sx={mergeSx({
                "visibility": agreed ? "visible" : "hidden"
            }, sx)} {...other}>
                {children}
            </Stack>
            {cloneElement(tos, {
                "onClose": () => {
                    onClose?.();

                    setAgreed(true);
                }
            })}
        </>
    );
}
