/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Auto Fit Grid
 */

import * as React from "react";
import { getVerticalPaddingStyle } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { VerticalPaddingProps } from "../declare/vertical-padding";

export type AutoFitGridProps = {

    readonly gridMinWidth: string;
    readonly gridMaxWidth?: string;

    readonly columnGap?: string;
    readonly rowGap?: string;

    readonly style?: React.CSSProperties;
} & VerticalPaddingProps;

type AutoFitGridWithThemeProps = AutoFitGridProps & ThemeProps;

class AutoFitGridBase extends React.PureComponent<AutoFitGridWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        const containerStyle: React.CSSProperties = {
            ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
            ...this._getGridStyle(),
            ...this.props.style,
        };

        return (<div
            style={containerStyle}
        >
            {this.props.children}
        </div>);
    }

    private _getGridStyle(): React.CSSProperties {

        const minWidth: string = this.props.gridMinWidth;
        const maxWidth: string = this.props.gridMaxWidth ?? '1fr';

        return {
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            rowGap: this.props.rowGap,
            columnGap: this.props.columnGap,
            gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, ${maxWidth}))`,
        };
    }
}

export const AutoFitGrid: React.ComponentType<AutoFitGridProps> = withTheme(AutoFitGridBase);
