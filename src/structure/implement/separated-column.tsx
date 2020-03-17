/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Separated Column
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type SeparatedColumnProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type SeparatedColumnWithThemeProps = SeparatedColumnProps & ThemeProps;

class SeparatedColumnBase extends React.PureComponent<SeparatedColumnWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...this.props.style,
        }}>
            <div>{this.props.left}</div>
            <div>{this.props.right}</div>
        </div>);
    }
}

export const SeparatedColumn: React.ComponentType<SeparatedColumnProps> = withTheme(SeparatedColumnBase);
