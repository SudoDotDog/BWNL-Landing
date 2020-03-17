/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Block
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type BlockProps = {

    readonly backgroundImage?: string;

    readonly style?: React.CSSProperties;
    readonly className?: string;
};

type BlockWithThemeProps = BlockProps & ThemeProps;

class BlockBase extends React.PureComponent<BlockWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        const sectionStyle: React.CSSProperties = {
            ...this._getBackgroundStyle(),
            ...this.props.style,
        };

        return (<section
            className={this.props.className}
            style={sectionStyle}
        >
            {this.props.children}
        </section>);
    }

    private _getBackgroundStyle(): React.CSSProperties {

        if (this.props.backgroundImage) {
            return {
                backgroundImage: `url(${this.props.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            };
        }
        return {};
    }
}

export const Block: React.ComponentType<BlockProps> = withTheme(BlockBase);
