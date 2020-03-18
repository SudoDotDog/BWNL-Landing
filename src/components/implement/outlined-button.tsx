/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Outlined Button
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { OutlinedButtonStyle } from "../style/outlined-button.style";

export type OutlinedButtonProps = {

    readonly title: string;

    readonly style?: React.CSSProperties;
};

type OutlinedButtonWithThemeProps = OutlinedButtonProps & ThemeProps;

class OutlinedButtonBase extends React.PureComponent<OutlinedButtonWithThemeProps> {

    private readonly _outlinedButtonStyle: Classes = OutlinedButtonStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<button
            style={{
                ...this.props.style,
            }}
        >
            {this.props.title}
        </button>);
    }
}

export const OutlinedButton: React.ComponentType<OutlinedButtonProps> = withTheme(OutlinedButtonBase);
