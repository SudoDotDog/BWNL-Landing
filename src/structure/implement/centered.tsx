/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Centered
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { FillerStyle } from "../../common/style/filler.style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { CenteredStyle } from "../style/centered.style";

export type CenteredProps = {

    readonly maxWidth?: string;
    readonly minWidth?: string;

    readonly coverStyle?: React.CSSProperties;
    readonly style?: React.CSSProperties;
};

type CenteredWithThemeProps = CenteredProps & ThemeProps;

class CenteredBase extends React.PureComponent<CenteredWithThemeProps> {

    private readonly _centeredStyle: Classes = CenteredStyle.use();
    private readonly _fillerStyle: Classes = FillerStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={this.props.coverStyle}
            className={this._centeredStyle.cover}
        >
            <div
                style={{
                    maxWidth: this.props.maxWidth ?? theme.block.centered.maxWidth,
                    minWidth: this.props.minWidth ?? theme.block.centered.minWidth,
                    ...this.props.style,
                }}
                className={this._fillerStyle.width}
            >
                {this.props.children}
            </div>
        </div>);
    }
}

export const Centered: React.ComponentType<CenteredProps> = withTheme(CenteredBase);
