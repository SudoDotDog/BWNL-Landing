/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Outlined Button
 */

import { Classes, mergeClasses, assertIfTrue } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { OutlinedButtonStyle } from "../style/outlined-button.style";
import { LinkableButton } from "./linkable-button";

export type OutlinedButtonProps = {

    readonly title: string;

    readonly href?: string;
    readonly onClick?: () => void;

    readonly regularColor?: string;
    readonly emphasizeColor?: string;

    readonly style?: React.CSSProperties;
};

export type OutlinedButtonStates = {

    readonly hover: boolean;
};

type OutlinedButtonWithThemeProps = OutlinedButtonProps & ThemeProps;

class OutlinedButtonBase extends React.Component<OutlinedButtonWithThemeProps, OutlinedButtonStates> {

    public readonly state: OutlinedButtonStates = {

        hover: false,
    };

    private readonly _outlinedButtonStyle: Classes = OutlinedButtonStyle.use();

    public constructor(props: OutlinedButtonWithThemeProps) {

        super(props);

        this._handleHoverChange = this._handleHoverChange.bind(this);
    }

    public render() {

        return (<LinkableButton
            title={this.props.title}
            className={this._outlinedButtonStyle.link}
            style={{
                ...this._getBorderStyle(),
                ...this.props.style,
            }}
            onHoverStatesChange={this._handleHoverChange}
            href={this.props.href}
            onClick={this.props.onClick}
        >
            {this.props.title}
        </LinkableButton>);
    }

    private _getBorderStyle(): React.CSSProperties {

        const theme: LandingTheme = this.props.theme;
        const emphasize: boolean = this._isEmphasized();

        const emphasizeColor: string = this.props.emphasizeColor ?? theme.color.majorColor.emphasize;
        const regularColor: string = this.props.regularColor ?? theme.color.majorColor.regular;

        return {
            borderColor: emphasize
                ? emphasizeColor
                : regularColor,
        };
    }

    private _handleHoverChange(hover: boolean): void {

        this.setState({
            hover,
        });
    }

    private _isEmphasized(): boolean {

        if (!this.state.hover) {
            return false;
        }

        return Boolean(this.props.onClick)
            || Boolean(this.props.href);
    }
}

export const OutlinedButton: React.ComponentType<OutlinedButtonProps> = withTheme(OutlinedButtonBase);
