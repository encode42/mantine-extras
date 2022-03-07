import React from "react";
import Head from "next/head";
import { Container, useMantineTheme } from "@mantine/core";
import { ChildrenProps } from "../utils";

// TODO: Automatic favicon generation

/**
 * The default details of the website.
 */
const defaultDetails = {
    "type": "website"
}

export interface Details {
    /**
     * Title of the website.
     */
    "title": string,

    /**
     * Description of the website.
     */
    "description": string,

    /**
     * Logo of the website.
     */
    "logo": string,

    /**
     * Favicon of the website.
     */
    "favicon": string,

    /**
     * Type of the website.
     *
     * @see https://ogp.me/#types
     */
    "type"?: string
}

/**
 * The properties for this layout.
 */
export interface StandardLayoutProps extends ChildrenProps {
    /**
     * Title of the page.
     *
     * Defaults to the website's title.
     */
    "title"?: string,

    /**
     * Description of the page.
     *
     * Defaults to the website's description.
     */
    "description"?: string,

    /**
     * Whether the page's title should be prefixed with the site's name.
     */
    "prefixed"?: boolean,

    /**
     * Details of the website.
     */
    "details"?: Details,

    /**
     * Whether the layout should be containerized.
     */
    "containerize"?: boolean,
}

/**
 * A minimal layout for ease-of-use.
 */
export function StandardLayout({ title, description, prefixed = true, details, containerize = true, children }: StandardLayoutProps) {
    details = { ...defaultDetails, ...details };

    const width = "100vw";
    const height = "100vh";

    // Process the title and description
    const targetTitle = prefixed && title ? `${details.title} | ${title}` : details.title;
    const targetDescription = description ?? details.description;

    const theme = useMantineTheme();

    return (
        <Container sx={{
            "minWidth": width,
            "maxWidth": width,
            "height": height
        }}>
            <Head>
                <title>{targetTitle}</title>
                <meta property="og:title" content={targetTitle} />

                <meta name="description" content={targetDescription} />
                <meta property="og:description" content={targetDescription} />

                <meta name="application-name" content={details.title} />
                <meta property="og:site_name" content={details.title} />
                <meta name="twitter:card" content="summary" />
                <meta property="og:type" content={details.type} />

                <meta name="theme-color" content={theme.colors[theme.primaryColor]?.[5]} />

                <meta itemProp="image" property="og:image" content={details.logo} />
                <link rel="icon" href={details.favicon} />
            </Head>

            {
                containerize ? (
                    <Container sx={{
                        "height": "inherit"
                    }}>
                        {children}
                    </Container>
                ) : (
                    children
                )
            }
        </Container>
    );
}
