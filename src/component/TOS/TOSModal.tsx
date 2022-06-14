import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ModalProps } from "@mantine/core";
import { Optional } from "../../util";

/**
 * Options for the {@link TOSModal} component.
 */
export type TOSModalProps = Optional<ModalProps, "onClose">;

/**
 * A modal that handles open/closed state.
 *
 * Intended for use with {@link TOSPage}.
 */
export function TOSModal({ title, onClose, ...other }: TOSModalProps) {
    const [open, openHandler] = useDisclosure(true);

    return (
        <Modal title={title} centered size="50%" opened={open} onClose={() => {
            onClose?.();

            openHandler.close();
        }} {...other} />
    );
}
