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

        return (<section
            className={this.props.className}
            style={{
                ...this.props.style,
                ...this._getBackgroundStyle(),
            }}
        >
            {this.props.children}
        </section>);
    }

    private _getBackgroundStyle(): React.CSSProperties {

        if (this.props.backgroundImage) {
            return {
                backgroundImage: this.props.backgroundImage,
            };
        }
        return {};
    }
}

export const Block: React.ComponentType<BlockProps> = withTheme(BlockBase);
