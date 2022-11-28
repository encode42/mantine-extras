import { useDisclosure } from "@mantine/hooks";
import { Button, ButtonProps, Group, Modal, Stack, Text } from "@mantine/core";
import { IconArrowLeft, IconTrash } from "@tabler/icons";

export interface DeleteButtonProps extends ButtonProps {
    "onConfirm": () => void
}

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
