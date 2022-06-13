import React, { ReactNode } from "react";
import { MantineColor } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons";

/**
 * Options for the {@link error} function.
 */
export interface errorProps {
    /**
     * Title of the notification.
     */
    "title"?: string,

    /**
     * Message within the notification.
     */
    "message"?: string,

    /**
     * Notification accent color.
     */
    "color"?: MantineColor,

    /**
     * Icon displayed in the notification
     */
    "icon"?: ReactNode
}

/**
 * A function that displays an error notification.
 */
export function error({
    title = "Error",
    message = "An unknown error occurred. Please try again later!",
    color = "red",
    icon = <IconX />
}: errorProps) {
    showNotification({
        title,
        message,
        color,
        icon
    });
}
