/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Linkable Button
 */

import { Classes, mergeClasses, assertIfTrue } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { LinkableButtonStyle } from "../style/linkable-button.style";

export type LinkableButtonProps = {

    readonly title: string;

    readonly href?: string;
    readonly onClick?: () => void;

    readonly regularColor?: string;
    readonly emphasizeColor?: string;

    readonly style?: React.CSSProperties;
};

export type LinkableButtonStates = {

    readonly buttonHover: boolean;
};

type LinkableButtonWithThemeProps = LinkableButtonProps & ThemeProps;

class LinkableButtonBase extends React.Component<LinkableButtonWithThemeProps, LinkableButtonStates> {

    public readonly state: LinkableButtonStates = {

        buttonHover: false,
    };

    private readonly _linkableButtonStyle: Classes = LinkableButtonStyle.use();

    public constructor(props: LinkableButtonWithThemeProps) {

        super(props);

        this._handleOnEnter = this._handleOnEnter.bind(this);
        this._handleOnLeave = this._handleOnLeave.bind(this);
    }

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<a

            className={mergeClasses(
                this._linkableButtonStyle.link,
                assertIfTrue(Boolean(this.props.onClick), this._linkableButtonStyle.actionLink),
            )}
            style={{
                ...theme.action.majorAction,
                ...this._getColorStyle(),
                ...this.props.style,
            }}
            href={this.props.href}
            onClick={this.props.onClick}
            onMouseEnter={this._handleOnEnter}
            onMouseLeave={this._handleOnLeave}
        >
            {this.props.title}
        </a>);
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

        this.setState({
            buttonHover,
        });
    }

    private _isEmphasized(): boolean {

        if (!this.state.buttonHover) {
            return false;
        }

        return Boolean(this.props.onClick)
            || Boolean(this.props.href);
    }
}

export const LinkableButton: React.ComponentType<LinkableButtonProps> = withTheme(LinkableButtonBase);
