/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Feature
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { RemoverStyle } from "../../common/style/remover.style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { FeatureStyle } from "../style/feature.style";

export type FeatureProps = {

    readonly title: React.ReactNode;
    readonly description: string;

    readonly topping?: React.ReactNode;
    readonly leading?: React.ReactNode;
    readonly action?: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type FeatureWithThemeProps = FeatureProps & ThemeProps;

class FeatureBase extends React.PureComponent<FeatureWithThemeProps> {

    private readonly _featureStyle: Classes = FeatureStyle.use();
    private readonly _removerStyle: Classes = RemoverStyle.use();

    public render() {

        return (<div style={{
            ...this.props.style,
        }}>
            {this._renderWithLeading()}
        </div>);
    }

    private _renderWithLeading() {

        if (!this.props.leading) {
            return this._renderContent();
        }

        return (<div
            className={this._featureStyle.leadingContainer}
        >
            <div
                className={this._featureStyle.leading}
            >
                {this.props.leading}
            </div>
            <div
                className={this._featureStyle.leadingContent}
            >
                {this._renderContent()}
            </div>
        </div>)
    }

    private _renderContent() {

        const theme: LandingTheme = this.props.theme;
        return (<React.Fragment>
            {this._renderTopping()}
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
        </React.Fragment>);
    }

    private _renderTopping() {

        if (!this.props.topping) {
            return null;
        }

        return (<div className={this._featureStyle.topping}>
            {this.props.topping}
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
