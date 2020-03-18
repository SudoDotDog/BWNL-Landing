/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Outlined Button
 */

import * as React from "react";
import { SizeType } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";

export type OutlinedButtonProps = {

    readonly verticalPadding?: SizeType;

    readonly style?: React.CSSProperties;
};

type OutlinedButtonWithThemeProps = OutlinedButtonProps & ThemeProps;

class OutlinedButtonBase extends React.PureComponent<OutlinedButtonWithThemeProps> {

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

export const OutlinedButton: React.ComponentType<OutlinedButtonProps> = withTheme(OutlinedButtonBase);
