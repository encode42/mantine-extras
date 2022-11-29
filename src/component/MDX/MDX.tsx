import React from "react";
import { MDXComponents } from "mdx/types";
import { cloneElement, memo, PropsWithChildren, ReactElement, ReactNode } from "react";
import { Anchor, Code, CodeProps, List, Stack, Text, Title } from "@mantine/core";
import { Prism, PrismProps } from "@mantine/prism";
import { Language } from "prism-react-renderer";
import { Optional } from "@encode42/node-extras";

interface MDXProviderProps {
    "children": ReactElement
}

function iterateList(list?: any[], withPadding = false) {
    const items: ReactNode[] = [];

    for (const entry of list) {
        let contents = entry;

        if (typeof entry === "object") {
            contents = entry.props.children;
        }

        if (contents === "\n") {
            continue;
        }

        if (typeof contents === "string") {
            items.push(<List.Item>{contents}</List.Item>);
        }

        if (Array.isArray(contents)) {
            items.push(<List.Item>{contents[0]}</List.Item>);

            if (contents[2] && contents[2].props?.children) {
                items.push(iterateList(contents[2].props.children, true));
            } else {
                items.push(iterateList(contents.slice(1, contents.length), true));
            }
        }
    }

    return (
        <List withPadding={withPadding}>
            {items}
        </List>
    );
}

function SmartList({ children }) {
    if (!children) {
        return <></>;
    }

    return iterateList(children);
}

function SmartCode({ className, language = "markup", children, ...other }: Omit<CodeProps | PrismProps, "children"> & Optional<Pick<PrismProps, "language">, "language"> & PropsWithChildren) {
    if (className) {
        return (
            <Prism language={className.slice(className.indexOf("-") + 1) as Language} {...other}>
                {children as string}
            </Prism>
        );
    }

    return (
        <Code {...other}>
            {children}
        </Code>
    );
}

function MDXProviderComponent({ children }: MDXProviderProps) {
    // TODO: TypeScript is getting mad at refs here

    const mdx = cloneElement(children, {
        "components": {
            "code": props => <SmartCode {...props} />,
            // @ts-ignore
            "strong": props => <Text weight="bold" component="span" inline {...props} />,
            "em": props => (
                // @ts-ignore
                <Text component="span" inline sx={{
                    "fontStyle": "italic"
                }} {...props} />
            ),
            // @ts-ignore
            "p": props => <Text {...props} />,
            // @ts-ignore
            "a": props => <Anchor {...props} />,
            // @ts-ignore
            "ul": props => <SmartList {...props} />,
            // @ts-ignore
            "ol": props => <SmartList {...props} />,
            // @ts-ignore
            "h1": props => <Title order={1} {...props} />,
            // @ts-ignore
            "h2": props => <Title order={2} {...props} />,
            // @ts-ignore
            "h3": props => <Title order={3} {...props} />,
            // @ts-ignore
            "h4": props => <Title order={4} {...props} />,
            // @ts-ignore
            "h5": props => <Title order={5} {...props} />,
            // @ts-ignore
            "h6": props => <Title order={6} {...props} />,
        } as MDXComponents
    });

    return (
        <Stack>
            {mdx}
        </Stack>
    );
}

export const MDXProvider = memo(MDXProviderComponent);
