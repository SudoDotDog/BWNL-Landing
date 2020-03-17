/**
 * @author WMXPY
 * @namespace Landing_Theme
 * @description Theme
 */

import * as React from "react";
import { LandingTheme } from "./declare";
import { getDefaultTheme } from "./default";

export type ThemeProps = {
    readonly theme: LandingTheme;
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
