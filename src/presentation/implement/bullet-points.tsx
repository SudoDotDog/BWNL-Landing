/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Bullet Points
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { RemoverStyle } from "../../common/remover.style";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { BulletPointsStyle } from "../style/bullet-points.style";

export type BulletPointsProps = {

    readonly title: React.ReactNode;

    readonly bulletPoints: string[];
    readonly leading?: React.ReactNode;

    readonly style?: React.CSSProperties;
};

type BulletPointsWithThemeProps = BulletPointsProps & ThemeProps;

class BulletPointsBase extends React.PureComponent<BulletPointsWithThemeProps> {

    private readonly _bulletPointsStyle: Classes = BulletPointsStyle.use();
    private readonly _removerStyle: Classes = RemoverStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            className={this._bulletPointsStyle.cover}
            style={{
                ...this.props.style,
            }}
        >
            <div className={this._bulletPointsStyle.title}>
                <h4
                    className={this._removerStyle.paddingAndMargin}
                    style={theme.title.presentationTitle}
                >
                    {this.props.title}
                </h4>
            </div>
            <div className={this._bulletPointsStyle.list}>
                {this._renderBulletPoints()}
            </div>
        </div>);
    }

    private _renderBulletPoints() {

        return this.props.bulletPoints.map((point: string, index: number) => {

            return (<div
                key={index}
                className={this._bulletPointsStyle.point}
            >
                {this.props.leading &&
                    <span className={this._bulletPointsStyle.leading}>
                        {this.props.leading}
                    </span>}
                <span>{point}</span>
            </div>);
        });
    }
}

export const BulletPoints: React.ComponentType<BulletPointsProps> = withTheme(BulletPointsBase);
