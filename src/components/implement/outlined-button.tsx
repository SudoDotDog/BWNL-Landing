/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Outlined Button
 */

import { TRANSPARENT } from "@bwnl/shiny-inline";
import { Classes } from "@sudoo/jss";
import * as React from "react";
import { getComponentsButtonPaddingStyle, SizeType } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { OutlinedButtonStyle } from "../style/outlined-button.style";
import { LinkableButton } from "./linkable-button";
import { Color } from "@sudoo/color";

export type OutlinedButtonProps = {

    readonly title: string;

    readonly href?: string;
    readonly onClick?: () => void;

    readonly regularColor?: string;
    readonly emphasizeColor?: string;

    readonly size?: SizeType;

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

        const theme: LandingTheme = this.props.theme;

        return (<LinkableButton
            title={this.props.title}
            className={this._outlinedButtonStyle.link}
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
        const regularColor: string = this.props.regularColor ?? theme.color.majorColor.regular;

        return {
            borderColor: emphasize
                ? emphasizeColor
                : regularColor,
            backgroundColor: emphasize
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                ? Color.fromHEX(emphasizeColor).setAlpha(.1).toRGBA()
                : TRANSPARENT,
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
