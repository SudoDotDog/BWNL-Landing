/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Tilt Card
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { TiltCardStyle } from "../style/tilt-card.style";

export type TiltCardProps = {

    readonly style?: React.CSSProperties;
};

type TiltCardWithThemeProps = TiltCardProps & ThemeProps;

class TiltCardBase extends React.PureComponent<TiltCardWithThemeProps> {

    private readonly _tiltCardStyle: Classes = TiltCardStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            ...this.props.style,
        }}>
        </div>);
    }
}

export const TiltCard: React.ComponentType<TiltCardProps> = withTheme(TiltCardBase);
