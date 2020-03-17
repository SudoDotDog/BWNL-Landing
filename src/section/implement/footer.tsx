/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Footer
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { FooterCategory, FooterLink } from "../declare/footer";
import { FooterStyle } from "../style/footer.style";
import { NavigateLink } from "../../components/implement/navigate-link";

export type FooterProps = {

    readonly left: React.ReactNode;
    readonly categories: FooterCategory[];

    readonly style?: React.CSSProperties;
};

type FooterWithThemeProps = FooterProps & ThemeProps;

class FooterBase extends React.PureComponent<FooterWithThemeProps> {

    private readonly _footerStyle: Classes = FooterStyle.use();

    public constructor(props: FooterWithThemeProps) {

        super(props);

        this._renderCategories = this._renderCategories.bind(this);
        this._renderLink = this._renderLink.bind(this);
    }

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<footer
            style={this.props.style}
            className={this._footerStyle.cover}
        >
            <div
                className={this._footerStyle.left}
            >
                {this.props.left}
            </div>
            <div
                className={this._footerStyle.right}
            >
                {this.props.categories.map(this._renderCategories)}
            </div>
        </footer>);
    }

    private _renderCategories(category: FooterCategory, index: number) {

        const theme: LandingTheme = this.props.theme;
        return (<div
            key={index}
            className={this._footerStyle.categoryCover}
        >
            <div
                className={this._footerStyle.categoryTitle}
                style={theme.title.categoryTitle}
            >
                {category.category}
            </div>
            {category.links.map(this._renderLink)}
        </div>);
    }

    private _renderLink(link: FooterLink, index: number) {

        return (<div key={index}>
            <NavigateLink
                title={link.name}
                href={link.link}
            />
        </div>);
    }
}

export const Footer: React.ComponentType<FooterProps> = withTheme(FooterBase);
