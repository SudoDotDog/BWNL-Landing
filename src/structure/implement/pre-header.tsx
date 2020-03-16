/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Pre Header
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type PreHeaderProps = {

    readonly left: React.ReactNode;
    readonly right: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type PreHeaderWithThemeProps = PreHeaderProps & ThemeProps;

class PreHeaderBase extends React.PureComponent<PreHeaderWithThemeProps> {

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

export const PreHeader: React.ComponentType<PreHeaderProps> = withTheme(PreHeaderBase);
