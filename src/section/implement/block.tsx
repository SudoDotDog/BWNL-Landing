/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Block
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";

export type BlockProps = {

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
            }}
        >
            {this.props.children}
        </section>);
    }
}

export const Block: React.ComponentType<BlockProps> = withTheme(BlockBase);
