/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Button
 */

import { assertIfTrue, Classes, mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { NavigateButtonStyle } from "../style/navigate-button.style";

export type NavigateButtonProps = {

    readonly title: React.ReactNode;

    readonly onClick?: () => void;

    readonly style?: React.CSSProperties;
};

export type NavigateButtonStates = {

    readonly buttonHover: boolean;
};

type NavigateButtonWithThemeProps = NavigateButtonProps & ThemeProps;

class NavigateButtonBase extends React.Component<NavigateButtonWithThemeProps, NavigateButtonStates> {

    public readonly state: NavigateButtonStates = {

        buttonHover: false,
    };

    private readonly _navigateButtonStyle: Classes = NavigateButtonStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;
        const emphasize: boolean = this._isEmphasized();

        return (<button
            className={mergeClasses(
                this._navigateButtonStyle.button,
                assertIfTrue(Boolean(this.props.onClick), this._navigateButtonStyle.actionButton),
            )}
            style={{
                ...theme.action.majorAction,
                color: emphasize
                    ? theme.color.majorColor.emphasize
                    : theme.color.majorColor.regular,
            }}
            onClick={this.props.onClick}
            onMouseEnter={() => this.setState({ buttonHover: true })}
            onMouseLeave={() => this.setState({ buttonHover: false })}
        >
            {this.props.title}
        </button>);
    }

    private _isEmphasized(): boolean {

        if (!this.state.buttonHover) {
            return false;
        }

        if (Boolean(this.props.onClick)) {
            return true;
        }

        return false;
    }
}

export const NavigateButton: React.ComponentType<NavigateButtonProps> = withTheme(NavigateButtonBase);
