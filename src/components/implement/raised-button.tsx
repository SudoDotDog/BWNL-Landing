/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Raised Button
 */

import * as React from "react";
import { SizeType } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { Classes } from "@sudoo/jss";
import { RaisedButtonStyle } from "../style/raised-button.style";

export type RaisedButtonProps = {

    readonly verticalPadding?: SizeType;

    readonly style?: React.CSSProperties;
};

type RaisedButtonWithThemeProps = RaisedButtonProps & ThemeProps;

class RaisedButtonBase extends React.PureComponent<RaisedButtonWithThemeProps> {

    private readonly _raisedButtonStyle: Classes = RaisedButtonStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<button
            style={{
                ...this.props.style,
            }}
        >
            {this.props.children}
        </button>);
    }
}

export const RaisedButton: React.ComponentType<RaisedButtonProps> = withTheme(RaisedButtonBase);
