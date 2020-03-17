/**
 * @author WMXPY
 * @namespace Landing
 * @description Theme
 */

import { BLUE, GRAY, NAVY, WHITE } from "@bwnl/shiny-inline";
import * as React from "react";

export type LandingTheme = {

    readonly block: {
        readonly verticalPadding: {
            readonly large: React.CSSProperties;
            readonly medium: React.CSSProperties;
            readonly small: React.CSSProperties;
        };
        readonly centered: {
            readonly maxWidth: string;
            readonly minWidth: string;
        };
    };
    readonly color: {
        readonly majorColor: {
            readonly border: string;
            readonly regular: string;
            readonly background: string;
            readonly emphasize: string;
        };
    };
    readonly title: {
        readonly majorTitle: React.CSSProperties;
        readonly minorTitle: React.CSSProperties;
        readonly subtitle: React.CSSProperties;
        readonly presentationTitle: React.CSSProperties;
        readonly categoryTitle: React.CSSProperties;
    };
    readonly action: {
        readonly majorAction: React.CSSProperties;
    };
};

export type ThemeProps = {
    readonly theme: LandingTheme;
};

const getDefaultTheme = (): LandingTheme => {

    return {

        block: {
            verticalPadding: {
                large: {
                    paddingTop: '96px',
                    paddingBottom: '96px',
                },
                medium: {
                    paddingTop: '48px',
                    paddingBottom: '48px',
                },
                small: {
                    paddingTop: '12px',
                    paddingBottom: '12px',
                },
            },
            centered: {
                maxWidth: '80%',
                minWidth: '256px',
            },
        },
        color: {
            majorColor: {
                border: GRAY,
                regular: NAVY,
                background: WHITE,
                emphasize: BLUE,
            },
        },
        title: {
            majorTitle: {
                fontSize: '36px',
                lineHeight: '38px',
            },
            minorTitle: {
                fontSize: '28px',
                lineHeight: '26px',
            },
            subtitle: {
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: 'normal',
            },
            presentationTitle: {
                fontSize: '24px',
                lineHeight: '26px',
            },
            categoryTitle: {
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: 'bold',
            },
        },
        action: {
            majorAction: {
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: 'bold',
            },
        },
    };
};

const LandingThemeContext: React.Context<LandingTheme> = React.createContext<LandingTheme>(getDefaultTheme());

export const LandingThemeConsumer = LandingThemeContext.Consumer;
export const LandingThemeProvider: React.ComponentType<React.ProviderProps<Partial<LandingTheme>>> = (props: React.ProviderProps<Partial<LandingTheme>>) => {

    const defaultTheme: LandingTheme = getDefaultTheme();
    const combinedTheme: LandingTheme = {
        ...defaultTheme,
        ...props.value,
    };

    return React.createElement(LandingThemeContext.Provider, {
        value: combinedTheme,
    }, props.children);
};

export const withTheme = <T>(Component: any): React.ComponentType<T> => {

    return <P extends React.Props<T>>(originProps: P) => {

        return React.createElement(LandingThemeConsumer, {} as any, (context: LandingTheme) => {

            return React.createElement(Component, {
                ...originProps,
                theme: context,
            }, originProps.children);
        });
    };
};
