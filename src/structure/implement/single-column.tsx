/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Single Column
 */

import * as React from "react";
import { getVerticalPaddingStyle } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { VerticalPaddingProps } from "../declare/vertical-padding";

export type SingleColumnProps = {

    readonly center?: boolean;

    readonly style?: React.CSSProperties;
} & VerticalPaddingProps;

type SingleColumnWithThemeProps = SingleColumnProps & ThemeProps;

class SingleColumnBase extends React.PureComponent<SingleColumnWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={{
                ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
                ...this._getCenterStyle(),
                ...this.props.style,
            }}
        >
            {this.props.children}
        </div>);
    }

    private _getCenterStyle(): React.CSSProperties {

        if (!this.props.center) {
            return {};
        }

        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };
    }
}

export const SingleColumn: React.ComponentType<SingleColumnProps> = withTheme(SingleColumnBase);
