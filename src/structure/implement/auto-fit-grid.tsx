/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Auto Fit Grid
 */

import * as React from "react";
import { getVerticalPaddingStyle, SizeType } from "../../common/style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type AutoFitGridProps = {

    readonly gridMinWidth: string;
    readonly gridMaxWidth?: string;

    readonly columnGap?: string;
    readonly rowGap?: string;

    readonly verticalPadding?: SizeType;
    readonly style?: React.CSSProperties;
};

type AutoFitGridWithThemeProps = AutoFitGridProps & ThemeProps;

class AutoFitGridBase extends React.PureComponent<AutoFitGridWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        const containerStyle: React.CSSProperties = {
            ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
            ...this._getGridStyle(),
            ...this.props.style,
        };

        console.log(containerStyle);

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
