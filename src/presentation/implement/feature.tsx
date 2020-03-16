/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Feature
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { RemoverStyle } from "../../common/remover.style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { FeatureStyle } from "../style/feature.style";

export type FeatureProps = {

    readonly title: React.ReactNode;
    readonly description: string;

    readonly leading?: React.ReactNode;
    readonly action?: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type FeatureWithThemeProps = FeatureProps & ThemeProps;

class FeatureBase extends React.PureComponent<FeatureWithThemeProps> {

    private readonly _featureStyle: Classes = FeatureStyle.use();
    private readonly _removerStyle: Classes = RemoverStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div style={{
            ...this.props.style,
        }}>
            {this._renderLeading()}
            <div className={this._featureStyle.title}>
                <h4
                    className={this._removerStyle.paddingAndMargin}
                    style={theme.title.presentationTitle}
                >
                    {this.props.title}
                </h4>
            </div>
            <div className={this._featureStyle.description}>
                {this.props.description}
            </div>
            {this._renderAction()}
        </div>);
    }

    private _renderLeading() {

        if (!this.props.leading) {
            return null;
        }

        return (<div className={this._featureStyle.leading}>
            {this.props.leading}
        </div>);
    }

    private _renderAction() {

        if (!this.props.action) {
            return null;
        }

        return (<div>
            {this.props.action}
        </div>);
    }
}

export const Feature: React.ComponentType<FeatureProps> = withTheme(FeatureBase);
