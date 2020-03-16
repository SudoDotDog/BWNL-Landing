/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Button
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { NavigateButtonStyle } from "../style/navigate-button.style";

export type NavigateButtonProps = {

    readonly style?: React.CSSProperties;
};

type NavigateButtonWithThemeProps = NavigateButtonProps & ThemeProps;

class NavigateButtonBase extends React.PureComponent<NavigateButtonWithThemeProps> {

    private readonly _navigateButtonStyle: Classes = NavigateButtonStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            ...this.props.style,
        }}>
            <div>{this.props.children}</div>
        </div>);
    }
}

export const NavigateButton: React.ComponentType<NavigateButtonProps> = withTheme(NavigateButtonBase);
