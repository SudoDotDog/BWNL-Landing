/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Pennant Column
 */

import { assertIfTrue, Classes, mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { getVerticalPaddingStyle } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { VerticalPaddingProps } from "../declare/vertical-padding";
import { PennantColumnStyle } from "../style/pennant-column.style";

export type PennantColumnProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly raiseLeft?: string;
    readonly raiseRight?: string;

    readonly style?: React.CSSProperties;
} & VerticalPaddingProps;

type PennantColumnWithThemeProps = PennantColumnProps & ThemeProps;

class PennantColumnBase extends React.PureComponent<PennantColumnWithThemeProps> {

    private readonly _pennantColumnStyle: Classes = PennantColumnStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={{
                ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
                ...this.props.style,
            }}
            className={this._pennantColumnStyle.cover}
        >
            <div
                className={mergeClasses(
                    this._pennantColumnStyle.left,
                    assertIfTrue(this.props.raiseLeft, this._pennantColumnStyle.raisedLeft),
                )}
                style={this._getLeftStyle()}
            >
                {this.props.left}
            </div>
            <div
                className={mergeClasses(
                    this._pennantColumnStyle.right,
                    assertIfTrue(this.props.raiseRight, this._pennantColumnStyle.raisedRight),
                )}
                style={this._getRightStyle()}
            >
                {this.props.right}
            </div>
        </div>);
    }

    private _getLeftStyle(): React.CSSProperties {

        if (!this.props.raiseLeft) {
            return {};
        }

        return {
            bottom: this.props.raiseLeft,
        };
    }

    private _getRightStyle(): React.CSSProperties {

        if (!this.props.raiseRight) {
            return {};
        }

        return {
            bottom: this.props.raiseRight,
        };
    }
}

export const PennantColumn: React.ComponentType<PennantColumnProps> = withTheme(PennantColumnBase);
