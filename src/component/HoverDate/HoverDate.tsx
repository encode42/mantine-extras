import { Popover, Text, TextProps } from "@mantine/core";
import { useState } from "react";

/**
 * Options for the {@link HoverDate} component.
 */
export interface HoverDateProps extends Omit<Omit<TextProps, "onMouseEnter">, "onMouseLeave"> {
    /**
     * Date to display.
     */
    "date": string | Date,

    /**
     * [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) instance to use.
     */
    "intl": Intl.DateTimeFormat
}

/**
 * Component that displays a date, and shows more information on hover.
 */
export function HoverDate({ date, intl, color = "dimmed", ...other }: HoverDateProps) {
    const [open, setOpen] = useState(false);
    const [dateObject] = useState(typeof date === "string" ? new Date(date) : date);

    return (
        <Popover opened={open} onChange={value => {
            setOpen(value);
        }}>
            <Popover.Target>
                <Text color={color} onMouseEnter={() => {
                    setOpen(true);
                }} onMouseLeave={() => {
                    setOpen(false);
                }} {...other}>
                    {dateObject.toLocaleDateString()}
                </Text>
            </Popover.Target>
            <Popover.Dropdown>
                <Text>{intl.format(dateObject)}</Text>
            </Popover.Dropdown>
        </Popover>
    );
}
