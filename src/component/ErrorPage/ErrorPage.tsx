import React, { ReactNode } from "react";
import { Anchor, Center, Group, Text, Title } from "@mantine/core";

/**
 * Options for the {@link ErrorPage} component.
 */
export interface ErrorPageProps {
    /**
     * Status code of the error.
     */
    "statusCode": string | number,

    /**
     * Title of the page.
     */
    "title": string,

    /**
     * Links to display.
     */
    "links"?: ReactNode
}

/**
 * A generic error page.
 *
 * {@code links} should be handled via your WAF.
 */
export function ErrorPage({
    statusCode,
    title,
    links = (
        <Anchor href="/">Home</Anchor>
    )
}: ErrorPageProps) {
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
