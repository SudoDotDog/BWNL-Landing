/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Header
 */

import * as React from "react";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { Classes, mergeClasses, assertIfTrue } from "@sudoo/jss";
import { HeaderStyle } from "../style/header.style";

export type HeaderProps = {

    readonly sticky?: boolean;

    readonly style?: React.CSSProperties;
};

type HeaderWithThemeProps = HeaderProps & ThemeProps;

class HeaderBase extends React.PureComponent<HeaderWithThemeProps> {

    private readonly _headerStyle: Classes = HeaderStyle.use();

    public render() {

        return (<header
            className={mergeClasses(
                assertIfTrue(this.props.sticky, this._headerStyle.sticky),
            )}
            style={{
                ...this._getHeaderStyle(),
                ...this.props.style,
            }}
        >
            <div>{this.props.children}</div>
        </header>);
    }

    private _getHeaderStyle(): React.CSSProperties {

        const theme: LandingTheme = this.props.theme;

        if (!this.props.sticky) {
            return {};
        }

        return {
            backgroundColor: theme.color.majorColor.background,
        };
    }
}

export const Header: React.ComponentType<HeaderProps> = withTheme(HeaderBase);
