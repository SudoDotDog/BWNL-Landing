/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Major Title
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { RemoverStyle } from "../../common/remover.style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { MajorTitleStyle } from "../style/major-title.style";

export type MajorTitleProps = {

    readonly title: React.ReactNode;
    readonly subtitle?: React.ReactNode;

    readonly center?: boolean;

    readonly style?: React.CSSProperties;
};

type MajorTitleWithThemeProps = MajorTitleProps & ThemeProps;

class MajorTitleBase extends React.PureComponent<MajorTitleWithThemeProps> {

    private readonly _majorTitleStyle: Classes = MajorTitleStyle.use();
    private readonly _removerStyle: Classes = RemoverStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            textAlign: this.props.center ? 'center' : 'start',
            ...this.props.style,
        }}>
            <div className={this._majorTitleStyle.title}>
                <h1
                    className={this._removerStyle.paddingAndMargin}
                    style={theme.title.majorTitle}
                >
                    {this.props.title}
                </h1>
            </div>
            {this._renderSubtitle()}
        </div>);
    }

    private _renderSubtitle() {

        if (!this.props.subtitle) {
            return null;
        }

        const theme: LandingTheme = this.props.theme;

        return (<div className={this._majorTitleStyle.description}>
            <h3
                className={this._removerStyle.paddingAndMargin}
                style={theme.title.subtitle}
            >
                {this.props.subtitle}
            </h3>
        </div>);
    }
}

export const MajorTitle: React.ComponentType<MajorTitleProps> = withTheme(MajorTitleBase);
