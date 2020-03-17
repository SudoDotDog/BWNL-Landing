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

    readonly backgroundImage?: string;

    readonly coverStyle?: React.CSSProperties;
    readonly style?: React.CSSProperties;
};

type CenteredWithThemeProps = CenteredProps & ThemeProps;

class CenteredBase extends React.PureComponent<CenteredWithThemeProps> {

    private readonly _centeredStyle: Classes = CenteredStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        const sectionStyle: React.CSSProperties = {
            maxWidth: theme.block.centered.maxWidth,
            minWidth: theme.block.centered.minWidth,
            ...this._getBackgroundStyle(),
            ...this.props.style,
        };

        return (<div
            style={this.props.coverStyle}
            className={this._centeredStyle.cover}
        >
            <Block
                style={sectionStyle}
            >
                {this.props.children}
            </Block>
        </div>);
    }

    private _getBackgroundStyle(): React.CSSProperties {

        if (this.props.backgroundImage) {
            return {
                backgroundImage: `url(${this.props.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            };
        }
        return {};
    }
}

export const Centered: React.ComponentType<CenteredProps> = withTheme(CenteredBase);
