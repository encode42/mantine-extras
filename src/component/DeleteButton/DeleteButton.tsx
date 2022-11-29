import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, ButtonProps, Group, Modal, Stack, Text } from "@mantine/core";
import { IconArrowLeft, IconTrash } from "@tabler/icons";

/**
 * Options for the {@link DeleteButton} component.
 */
export interface DeleteButtonProps extends ButtonProps {
    /**
     * Function that is run once the "Confirm" button is pressed.
     */
    "onConfirm": () => void
}

/**
 * Component that displays a "Delete" button, which opens a confirmation dialog on click.
 */
export function DeleteButton({ onConfirm, color = "red", ...other }: DeleteButtonProps) {
    const [openConfirm, confirmHandler] = useDisclosure(false);

    return (
        <>
            <Button color={color} leftIcon={<IconTrash />} onClick={() => {
                confirmHandler.open();
            }} {...other}>
                Delete
            </Button>
            <Modal title="Confirmation" centered opened={openConfirm} onClose={() => {
                confirmHandler.close();
            }}>
                <Stack>
                    <Text weight="bold">Are you sure you want to delete this?</Text>
                    <Group grow>
                        <Button leftIcon={<IconArrowLeft />} onClick={() => {
                            confirmHandler.close();
                        }}>
                            Cancel
                        </Button>
                        <Button color="red" leftIcon={<IconTrash />} onClick={() => {
                            onConfirm();

                            confirmHandler.close();
                        }}>
                            Confirm
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </>
    );
}
