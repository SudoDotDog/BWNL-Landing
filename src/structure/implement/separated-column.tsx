/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Separated Column
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { getVerticalPaddingStyle, SizeType } from "../../common/style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { SeparatedColumnStyle } from "../style/separated-column.style";

export type SeparatedColumnProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly verticalPadding?: SizeType;
    readonly style?: React.CSSProperties;
};

type SeparatedColumnWithThemeProps = SeparatedColumnProps & ThemeProps;

class SeparatedColumnBase extends React.PureComponent<SeparatedColumnWithThemeProps> {

    private readonly _separatedStyle: Classes = SeparatedColumnStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={{
                ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
                ...this.props.style,
            }}
            className={this._separatedStyle.cover}
        >
            <div>{this.props.left}</div>
            <div>{this.props.right}</div>
        </div>);
    }
}

export const SeparatedColumn: React.ComponentType<SeparatedColumnProps> = withTheme(SeparatedColumnBase);
