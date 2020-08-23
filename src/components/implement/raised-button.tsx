/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Raised Button
 */

import { Color } from "@sudoo/color";
import { Classes } from "@sudoo/jss";
import * as React from "react";
import { getComponentsButtonPaddingStyle, SizeType } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { RaisedButtonStyle } from "../style/raised-button.style";
import { LinkableButton } from "./linkable-button";

export type RaisedButtonProps = {

    readonly title: string;

    readonly href?: string;
    readonly onClick?: () => void;

    readonly backgroundColor?: string;
    readonly emphasizeColor?: string;

    readonly size?: SizeType;

    readonly style?: React.CSSProperties;
};

export type RaisedButtonStates = {

    readonly hover: boolean;
};

type RaisedButtonWithThemeProps = RaisedButtonProps & ThemeProps;

class RaisedButtonBase extends React.Component<RaisedButtonWithThemeProps, RaisedButtonStates> {

    public readonly state: RaisedButtonStates = {

        hover: false,
    };

    private readonly _raisedButtonStyle: Classes = RaisedButtonStyle.use();

    public constructor(props: RaisedButtonWithThemeProps) {

        super(props);

        this._handleHoverChange = this._handleHoverChange.bind(this);
    }

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<LinkableButton
            title={this.props.title}
            className={this._raisedButtonStyle.link}
            style={{
                ...getComponentsButtonPaddingStyle(theme, this.props.size),
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
        const backgroundColor: string = this.props.backgroundColor ?? theme.color.majorColor.background;

        return {
            color: backgroundColor,
            backgroundColor: emphasize
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                ? Color.fromHEX(emphasizeColor).setAlpha(.9).toRGBA()
                : emphasizeColor,
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

export const RaisedButton: React.ComponentType<RaisedButtonProps> = withTheme(RaisedButtonBase);
