/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Link
 */

import { assertIfTrue, Classes, mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { NavigateLinkStyle } from "../style/navigate-link.style";

export type NavigateLinkProps = {

    readonly title: React.ReactNode;
    readonly leading?: React.ReactNode;
    readonly after?: React.ReactNode;

    readonly href?: string;
    readonly onClick?: () => void;

    readonly regularColor?: string;
    readonly emphasizeColor?: string;

    readonly style?: React.CSSProperties;
};

export type NavigateLinkStates = {

    readonly buttonHover: boolean;
};

type NavigateLinkWithThemeProps = NavigateLinkProps & ThemeProps;

class NavigateLinkBase extends React.Component<NavigateLinkWithThemeProps, NavigateLinkStates> {

    public readonly state: NavigateLinkStates = {

        buttonHover: false,
    };

    private readonly _navigateLinkStyle: Classes = NavigateLinkStyle.use();

    public constructor(props: NavigateLinkWithThemeProps) {

        super(props);

        this._handleOnEnter = this._handleOnEnter.bind(this);
        this._handleOnLeave = this._handleOnLeave.bind(this);
    }

    public render() {

        const theme: LandingTheme = this.props.theme;
        const emphasize: boolean = this._isEmphasized();

        return (<a
            className={mergeClasses(
                this._navigateLinkStyle.link,
                assertIfTrue(emphasize, this._navigateLinkStyle.actionLink),
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
            {this._renderLeading()}
            {this._renderTitle()}
            {this._renderAfter()}
        </a>);
    }

    private _renderLeading() {

        if (!this.props.leading) {
            return null;
        }

        return (<span>
            {this.props.leading}
        </span>);
    }

    private _renderTitle() {

        const padLeft: boolean = this._isEmphasized() && Boolean(this.props.leading);
        return (<span
            className={mergeClasses(
                this._navigateLinkStyle.actionField,
                assertIfTrue(padLeft, this._navigateLinkStyle.actionMarginLeft),
            )}
        >
            {this.props.title}
        </span >);
    }

    private _renderAfter() {

        if (!this.props.after) {
            return null;
        }

        const padLeft: boolean = this._isEmphasized();
        return (<span
            className={mergeClasses(
                this._navigateLinkStyle.actionField,
                assertIfTrue(padLeft, this._navigateLinkStyle.actionMarginLeft),
            )}
        >
            {this.props.after}
        </span>);
    }

    private _getColorStyle(): React.CSSProperties {

        const theme: LandingTheme = this.props.theme;
        const emphasize: boolean = this._isEmphasized();

        const emphasizeColor: string = this.props.emphasizeColor ?? theme.color.majorColor.navigate;
        const regularColor: string = this.props.regularColor ?? theme.color.majorColor.link;

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

        return Boolean(this.props.onClick) || Boolean(this.props.href);
    }
}

export const NavigateLink: React.ComponentType<NavigateLinkProps> = withTheme(NavigateLinkBase);
