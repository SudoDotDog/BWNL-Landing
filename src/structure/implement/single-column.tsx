/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Single Column
 */

import * as React from "react";
import { getVerticalPaddingStyle, SizeType } from "../../common/style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type SingleColumnProps = {

    readonly verticalPadding?: SizeType;

    readonly style?: React.CSSProperties;
};

type SingleColumnWithThemeProps = SingleColumnProps & ThemeProps;

class SingleColumnBase extends React.PureComponent<SingleColumnWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={{
                ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
                ...this.props.style,
            }}
        >
            {this.props.children}
        </div>);
    }
}

export const SingleColumn: React.ComponentType<SingleColumnProps> = withTheme(SingleColumnBase);