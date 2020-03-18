/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Double Column
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { getVerticalPaddingStyle } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { VerticalPaddingProps } from "../declare/vertical-padding";
import { DoubleColumnStyle } from "../style/double-column.style";

export type DoubleColumnProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly style?: React.CSSProperties;
} & VerticalPaddingProps;

type DoubleColumnWithThemeProps = DoubleColumnProps & ThemeProps;

class DoubleColumnBase extends React.PureComponent<DoubleColumnWithThemeProps> {

    private readonly _doubleColumnStyle: Classes = DoubleColumnStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={{
                ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
                ...this.props.style,
            }}
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
        </div>);
    }
}

export const DoubleColumn: React.ComponentType<DoubleColumnProps> = withTheme(DoubleColumnBase);
