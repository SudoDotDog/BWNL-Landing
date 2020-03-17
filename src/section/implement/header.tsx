/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Header
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type HeaderProps = {

    readonly style?: React.CSSProperties;
};

type HeaderWithThemeProps = HeaderProps & ThemeProps;

class HeaderBase extends React.PureComponent<HeaderWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<header style={{
            ...theme.block.padding.small,
            ...this.props.style,
        }}>
            <div>{this.props.children}</div>
        </header>);
    }
}

export const Header: React.ComponentType<HeaderProps> = withTheme(HeaderBase);
