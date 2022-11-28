import { Popover, Text, TextProps } from "@mantine/core";
import { useState } from "react";

export interface HoverDateProps extends Omit<Omit<TextProps, "onMouseEnter">, "onMouseLeave"> {
    "date": string | Date,
    "intl": Intl.DateTimeFormat
}

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
