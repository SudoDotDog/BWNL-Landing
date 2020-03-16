/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Button
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { NavigateButtonStyle } from "../style/navigate-button.style";

export type NavigateButtonProps = {

    readonly title: React.ReactNode;

    readonly style?: React.CSSProperties;
};

export type NavigateButtonStates = {

    readonly hover: boolean;
};

type NavigateButtonWithThemeProps = NavigateButtonProps & ThemeProps;

class NavigateButtonBase extends React.Component<NavigateButtonWithThemeProps, NavigateButtonStates> {

    public readonly state: NavigateButtonStates = {

        hover: false,
    };

    private readonly _navigateButtonStyle: Classes = NavigateButtonStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<button
            className={this._navigateButtonStyle.button}
            style={{
                ...theme.action.majorAction,
                color: theme.color.majorColor.regular,
            }}
        >
            {this.props.title}
        </button>);
    }
}

export const NavigateButton: React.ComponentType<NavigateButtonProps> = withTheme(NavigateButtonBase);
