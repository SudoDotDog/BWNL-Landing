/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Block
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type BlockProps = {

    readonly style?: React.CSSProperties;
};

type BlockWithThemeProps = BlockProps & ThemeProps;

class BlockBase extends React.PureComponent<BlockWithThemeProps> {

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<section style={{
            ...this.props.style,
        }}>
            {this.props.children}
        </section>);
    }
}

export const Block: React.ComponentType<BlockProps> = withTheme(BlockBase);
