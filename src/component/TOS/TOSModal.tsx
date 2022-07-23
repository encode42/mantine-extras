import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Anchor, Box, Button, Group, Modal, ModalProps, Stack } from "@mantine/core";
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
export function TOSModal({ withCloseButton = false, closeOnClickOutside = false, title, onClose, children, ...other }: TOSModalProps) {
    const [open, openHandler] = useDisclosure(true);

    function close() {
        onClose?.();

        openHandler.close();
    }

    return (
        <Modal title={title} centered size="50%" opened={open} withCloseButton={withCloseButton} closeOnClickOutside={closeOnClickOutside} onClose={() => {
            close();
        }} {...other}>
            <Stack spacing="xl">
                <Box>
                    {children}
                </Box>
                <Group grow>
                    <Button color="red" component={Anchor} href="/">
                        Deny
                    </Button>
                    <Button color="green" onClick={() => {
                        close();
                    }}>Accept</Button>
                </Group>
            </Stack>
        </Modal>
    );
}
