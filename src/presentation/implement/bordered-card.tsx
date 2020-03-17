/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Bordered Card
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { getPresentationContainerPaddingStyle, SizeType } from "../../common/style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { BorderedCardStyle } from "../style/bordered-card.style";

export type BorderedCardProps = {

    readonly size?: SizeType;

    readonly style?: React.CSSProperties;
};

type BorderedCardWithThemeProps = BorderedCardProps & ThemeProps;

class BorderedCardBase extends React.PureComponent<BorderedCardWithThemeProps> {

    private readonly _borderedCardStyle: Classes = BorderedCardStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            className={this._borderedCardStyle.card}
            style={{
                borderColor: theme.color.majorColor.border,
                backgroundColor: theme.color.majorColor.background,
                boxShadow: `1px 1px 2px 0 ${theme.color.majorColor.border}`,
                ...getPresentationContainerPaddingStyle(theme, this.props.size),
                ...this.props.style,
            }}
        >
            {this.props.children}
        </div>);
    }
}

export const BorderedCard: React.ComponentType<BorderedCardProps> = withTheme(BorderedCardBase);
