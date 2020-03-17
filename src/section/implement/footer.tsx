/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Footer
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { FooterStyle } from "../style/footer.style";

export type FooterProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type FooterWithThemeProps = FooterProps & ThemeProps;

class FooterBase extends React.PureComponent<FooterWithThemeProps> {

    private readonly _footerStyle: Classes = FooterStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<footer
            style={this.props.style}
            className={this._footerStyle.cover}
        >
            <div
                className={this._footerStyle.left}
            >
                {this.props.left}
            </div>
            <div
                className={this._footerStyle.right}
            >
                {this.props.right}
            </div>
        </footer>);
    }
}

export const Footer: React.ComponentType<FooterProps> = withTheme(FooterBase);
