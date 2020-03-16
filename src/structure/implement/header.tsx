/**
 * @author WMXPY
 * @namespace Landing_Structure
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

        return (<div style={{
            ...this.props.style,
        }}>
            <div>{this.props.children}</div>
        </div>);
    }
}

export const Header: React.ComponentType<HeaderProps> = withTheme(HeaderBase);
