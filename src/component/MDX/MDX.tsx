import React, { ReactNode } from "react";
import { Title } from "@mantine/core";
import { MDXProvider } from "@mdx-js/react";

/**
 * Options for the {@link MDX} component.
 */
export interface MDXProps {
    /**
     * Imported {@code .mdx} file.
     *
     * @see https://mdxjs.com/packages/react/#use
     */
    "file": ReactNode
}

/**
 * A [MDX](https://mdxjs.com/) wrapper for Mantine UI.
 */
export function MDX({ file }: MDXProps) {
    return (
        <MDXProvider components={{
            "h1": props => <Title>{{...props}.children}</Title>,
            "h2": props => <Title order={2}>{{...props}.children}</Title>,
            "h3": props => <Title order={3}>{{...props}.children}</Title>,
            "h4": props => <Title order={4}>{{...props}.children}</Title>,
            "h5": props => <Title order={5}>{{...props}.children}</Title>,
            "h6": props => <Title order={6}>{{...props}.children}</Title>
        }}>
            {file}
        </MDXProvider>
    );
}
