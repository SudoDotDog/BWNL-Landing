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

    readonly left?: React.ReactNode;
    readonly right?: React.ReactNode;

    readonly leftMinWidth?: string;
    readonly rightMinWidth?: string;

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
                style={this._getMinWidthStyle(this.props.leftMinWidth)}
            >
                {this.props.left}
            </div>
            <div
                className={this._doubleColumnStyle.right}
                style={this._getMinWidthStyle(this.props.rightMinWidth)}
            >
                {this.props.right}
            </div>
        </div>);
    }

    private _getMinWidthStyle(width?: string): React.CSSProperties {

        if (!width) {
            return {};
        }

        return {
            minWidth: width,
        };
    }
}

export const DoubleColumn: React.ComponentType<DoubleColumnProps> = withTheme(DoubleColumnBase);
