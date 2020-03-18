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

    readonly x?: number;
    readonly y?: number;

    readonly style?: React.CSSProperties;
};

type TiltCardWithThemeProps = TiltCardProps & ThemeProps;

class TiltCardBase extends React.PureComponent<TiltCardWithThemeProps> {

    private readonly _tiltCardStyle: Classes = TiltCardStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            ...this._getTransformStyle(),
            ...this.props.style,
        }}>
            {this.props.children}
        </div>);
    }

    private _getTransformStyle(): React.CSSProperties {

        const elements: string[] = [];
        if (this.props.x) {
            elements.push(`rotateX(${this.props.x}deg)`);
        }
        if (this.props.y) {
            elements.push(`rotateY(${this.props.y}deg)`);
        }

        if (elements.length > 0) {
            return {
                transform: elements.join(' '),
            }
        }
        return {};
    }
}

export const TiltCard: React.ComponentType<TiltCardProps> = withTheme(TiltCardBase);
