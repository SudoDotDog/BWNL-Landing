/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Double Column
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type DoubleColumnSectionProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type DoubleColumnSectionWithThemeProps = DoubleColumnSectionProps & ThemeProps;

class DoubleColumnSectionBase extends React.PureComponent<DoubleColumnSectionWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={this.props.style}
        >
            <div>{this.props.left}</div>
            <div>{this.props.right}</div>
        </div>);
    }
}

export const DoubleColumnSection: React.ComponentType<DoubleColumnSectionProps> = withTheme(DoubleColumnSectionBase);
