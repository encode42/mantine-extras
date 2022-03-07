import React, { Dispatch, forwardRef, Ref, SetStateAction, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Button, Group, Modal } from "@mantine/core";
import { BooleanState, ChildrenProps } from "../../utils";

/**
 * A value of an OptionModal's values.
 */
export interface OptionModalValue<T> {
    /**
     * Function used to set the state.
     */
    "set": Dispatch<SetStateAction<T>>,

    /**
     * Value of the state.
     */
    "value": T,

    /**
     * Value to reset to.
     */
    "default": T
}

/**
 * The methods of an OptionModal.
 */
export interface OptionModalRef {
    /**
     * Reset the pending values to their provided defaults.
     */
    "reset": () => void
}

/**
 * Properties for an OptionModal.
 */
export interface OptionModalProps extends ChildrenProps {
    /**
     * Whether the modal is opened.
     */
    "open": BooleanState,

    /**
     * The title of the modal.
     */
    "title"?: string

    /**
     * Function to run when the apply button is pressed.
     */
    "onApply": () => void

    /**
     * Function to run when the close button is pressed.
     */
    "onClose"?: () => void

    /**
     * Default pending values.
     */
    "values": OptionModalValue<any>[],
}

/**
 * A modal with pending options.
 */
function COptionModal({ open, onClose, onApply, title = "Advanced options", values, children }: OptionModalProps, ref) {
    const closeRef = useRef<HTMLButtonElement>(null);

    /**
     * Reset the pending values.
     */
    function reset() {
        console.log("resetting")

        for (const value of values) {
            console.log(value)
            value.set(value.default);
        }
    }

    // Pass the values through ref
    useImperativeHandle(ref, () => ({
        "reset": reset
    }));

    // Reset the values on open
    useEffect(() => {
        if (open.value) {
            reset();
        }
    }, [open.value]);

    return (
        <Modal title={title} hideCloseButton centered opened={open.value} onClose={() => {
            if (closeRef.current) {
                closeRef.current.focus();
            }

            console.log("closing")
            console.log(values)

            open.set(false);
            reset();
            onClose?.();
        }}>
            <Group direction="column" grow>
                {children}

                <Group position="right">
                    <Button color="red" variant="outline" ref={closeRef} onClick={() => {
                        open.set(false);
                        onClose?.();
                    }}>Cancel</Button>
                    <Button onClick={() => {
                        onApply();
                        open.set(false);
                    }}>Apply</Button>
                </Group>
            </Group>
        </Modal>
    );
}

export const OptionModal = forwardRef<OptionModalRef, OptionModalProps>(COptionModal);
