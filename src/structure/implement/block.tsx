/**
 * @author WMXPY
 * @namespace Landing_Structure
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

        return (<div style={{
            ...this.props.style,
        }}>
            <div>{this.props.children}</div>
        </div>);
    }
}

export const Block: React.ComponentType<BlockProps> = withTheme(BlockBase);
