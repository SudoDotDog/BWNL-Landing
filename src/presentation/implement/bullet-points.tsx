/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Bullet Points
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { BulletPointsStyle } from "../style/bullet-points.style";

export type BulletPointsProps = {

    readonly style?: React.CSSProperties;
};

type BulletPointsWithThemeProps = BulletPointsProps & ThemeProps;

class BulletPointsBase extends React.PureComponent<BulletPointsWithThemeProps> {

    private readonly _headerButtonStyle: Classes = BulletPointsStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            ...this.props.style,
        }}>
            <div>{this.props.children}</div>
        </div>);
    }
}

export const BulletPoints: React.ComponentType<BulletPointsProps> = withTheme(BulletPointsBase);
