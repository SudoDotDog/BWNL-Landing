/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Double Column
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { DoubleColumnStyle } from "../style/double-column.style";

export type DoubleColumnSectionProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type DoubleColumnSectionWithThemeProps = DoubleColumnSectionProps & ThemeProps;

class DoubleColumnSectionBase extends React.PureComponent<DoubleColumnSectionWithThemeProps> {

    private readonly _doubleColumnStyle: Classes = DoubleColumnStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<section
            style={this.props.style}
            className={this._doubleColumnStyle.cover}
        >
            <div
                className={this._doubleColumnStyle.left}
            >
                {this.props.left}
            </div>
            <div
                className={this._doubleColumnStyle.right}
            >
                {this.props.right}
            </div>
        </section>);
    }
}

export const DoubleColumnSection: React.ComponentType<DoubleColumnSectionProps> = withTheme(DoubleColumnSectionBase);
