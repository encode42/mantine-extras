import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ModalProps } from "@mantine/core";
import { Optional } from "../../util";

/**
 * A modal that handles open/closed state.
 *
 * Intended for use with {@link TOSPage}.
 */
export function TOSModal({ title, onClose, ...other }: Optional<ModalProps, "onClose">) {
    const [open, openHandler] = useDisclosure(true);

    return (
        <Modal title={title} centered size="50%" opened={open} onClose={() => {
            onClose?.();

            openHandler.close();
        }} {...other} />
    );
}
