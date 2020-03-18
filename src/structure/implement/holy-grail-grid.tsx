/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Holy Grail Grid
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { getVerticalPaddingStyle } from "../../common/style";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { VerticalPaddingProps } from "../declare/vertical-padding";
import { HolyGrailGridStyle } from "../style/holy-grail-grid";

export type HolyGrailGridProps = {

    readonly center: React.ReactNode;

    readonly style?: React.CSSProperties;
} & VerticalPaddingProps;

type HolyGrailGridWithThemeProps = HolyGrailGridProps & ThemeProps;

class HolyGrailGridBase extends React.PureComponent<HolyGrailGridWithThemeProps> {

    private readonly _holyGrailGridStyle: Classes = HolyGrailGridStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            style={{
                ...getVerticalPaddingStyle(theme, this.props.verticalPadding),
                ...this.props.style,
            }}
        >
            <div>
                {this.props.center}
            </div>
            {this.props.children}
        </div>);
    }
}

export const HolyGrailGrid: React.ComponentType<HolyGrailGridProps> = withTheme(HolyGrailGridBase);
