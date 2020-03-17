/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Button
 */

import { assertIfTrue, Classes, mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { NavigateButtonStyle } from "../style/navigate-button.style";

export type NavigateButtonProps = {

    readonly title: React.ReactNode;

    readonly onClick?: () => void;
    readonly onHoverStatesChange?: (buttonHover: boolean) => void;

    readonly regularColor?: string;
    readonly emphasizeColor?: string;

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

    public constructor(props: NavigateButtonWithThemeProps) {

        super(props);

        this._handleOnEnter = this._handleOnEnter.bind(this);
        this._handleOnLeave = this._handleOnLeave.bind(this);
    }

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<button
            className={mergeClasses(
                this._navigateButtonStyle.button,
                assertIfTrue(Boolean(this.props.onClick), this._navigateButtonStyle.actionButton),
            )}
            style={{
                ...theme.action.majorAction,
                ...this._getColorStyle(),
                ...this.props.style,
            }}
            onClick={this.props.onClick}
            onMouseEnter={this._handleOnEnter}
            onMouseLeave={this._handleOnLeave}
        >
            {this.props.title}
        </button>);
    }

    private _getColorStyle(): React.CSSProperties {

        const theme: LandingTheme = this.props.theme;
        const emphasize: boolean = this._isEmphasized();

        const emphasizeColor: string = this.props.emphasizeColor ?? theme.color.majorColor.emphasize;
        const regularColor: string = this.props.regularColor ?? theme.color.majorColor.regular;

        return {
            color: emphasize
                ? emphasizeColor
                : regularColor,
        };
    }

    private _handleOnEnter(): void {

        this._handleHoverChange(true);
    }

    private _handleOnLeave(): void {

        this._handleHoverChange(false);
    }

    private _handleHoverChange(buttonHover: boolean): void {

        if (this.props.onHoverStatesChange) {
            this.props.onHoverStatesChange(buttonHover);
        }
        this.setState({
            buttonHover,
        });
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
