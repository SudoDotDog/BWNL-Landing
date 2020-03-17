/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description CenteredBlock
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { CenteredBlockStyle } from "../style/centered.style";
import { Block } from "./block";

export type CenteredBlockProps = {

    readonly backgroundImage?: string;

    readonly coverStyle?: React.CSSProperties;
    readonly style?: React.CSSProperties;
};

type CenteredBlockWithThemeProps = CenteredBlockProps & ThemeProps;

class CenteredBlockBase extends React.PureComponent<CenteredBlockWithThemeProps> {

    private readonly _centeredBlockStyle: Classes = CenteredBlockStyle.use();

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
            className={this._centeredBlockStyle.cover}
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

export const CenteredBlock: React.ComponentType<CenteredBlockProps> = withTheme(CenteredBlockBase);
