/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Centered
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { CenteredStyle } from "../style/centered.style";
import { Block } from "./block";

export type CenteredProps = {

    readonly coverStyle?: React.CSSProperties;
    readonly style?: React.CSSProperties;
};

type CenteredWithThemeProps = CenteredProps & ThemeProps;

class CenteredBase extends React.PureComponent<CenteredWithThemeProps> {

    private readonly _centeredStyle: Classes = CenteredStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={this.props.coverStyle}
            className={this._centeredStyle.cover}
        >
            <Block
                style={{
                    maxWidth: theme.block.centered.maxWidth,
                    minWidth: theme.block.centered.minWidth,
                    ...this.props.style,
                }}
            >
                {this.props.children}
            </Block>
        </div>);
    }
}

export const Centered: React.ComponentType<CenteredProps> = withTheme(CenteredBase);
