import React, { ReactNode } from "react";
import { Anchor, Center, Group, Text, Title } from "@mantine/core";

export interface ErrorProps {
    "statusCode": string | number,
    "title": string,
    "links"?: ReactNode
}

/**
 * A generic error page.
 *
 * {@code links} should be handled via your WAF.
 */
export function Error({
    statusCode,
    title,
    links = (
        <Anchor href="/">Home</Anchor>
    )
}: ErrorProps) {
    return (
        <Center sx={{
            "height": "100vh"
        }}>
            <Group direction="column" sx={{
                "alignItems": "center"
            }}>
                <Group>
                    <Title>{statusCode}</Title>
                    <Text>{title}</Text>
                </Group>
                <Group>
                    {links}
                </Group>
            </Group>
        </Center>
    );
}
