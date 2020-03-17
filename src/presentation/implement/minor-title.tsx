/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Minor Title
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { RemoverStyle } from "../../common/style/remover.style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { MinorTitleStyle } from "../style/minor-title.style";

export type MinorTitleProps = {

    readonly title: React.ReactNode;
    readonly subtitle?: React.ReactNode;

    readonly center?: boolean;

    readonly style?: React.CSSProperties;
};

type MinorTitleWithThemeProps = MinorTitleProps & ThemeProps;

class MinorTitleBase extends React.PureComponent<MinorTitleWithThemeProps> {

    private readonly _minorTitleStyle: Classes = MinorTitleStyle.use();
    private readonly _removerStyle: Classes = RemoverStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            textAlign: this.props.center ? 'center' : 'start',
            ...this.props.style,
        }}>
            <div className={this._minorTitleStyle.title}>
                <h2
                    className={this._removerStyle.paddingAndMargin}
                    style={theme.title.minorTitle}
                >
                    {this.props.title}
                </h2>
            </div>
            {this._renderSubtitle()}
        </div>);
    }

    private _renderSubtitle() {

        if (!this.props.subtitle) {
            return null;
        }

        const theme: LandingTheme = this.props.theme;

        return (<div className={this._minorTitleStyle.description}>
            <h3
                className={this._removerStyle.paddingAndMargin}
                style={theme.title.subtitle}
            >
                {this.props.subtitle}
            </h3>
        </div>);
    }
}

export const MinorTitle: React.ComponentType<MinorTitleProps> = withTheme(MinorTitleBase);
