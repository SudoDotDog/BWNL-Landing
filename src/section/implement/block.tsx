/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Block
 */

import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { Classes } from "@sudoo/jss";
import { BlockStyle } from "../style/block.style";

export type BlockProps = {

    readonly backgroundImage?: string;
    readonly backgroundColor?: string;
    readonly backgroundVideo?: string;

    readonly backgroundVideoZIndex?: number;

    readonly style?: React.CSSProperties;
    readonly className?: string;
};

type BlockWithThemeProps = BlockProps & ThemeProps;

class BlockBase extends React.PureComponent<BlockWithThemeProps> {

    private readonly _blockStyle: Classes = BlockStyle.use();

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
            {this._renderVideo()}
            {this._renderChildren()}
        </section>);
    }

    private _renderChildren() {

        if (!this.props.backgroundVideo) {
            return this.props.children;
        }

        return (<div
            className={this._blockStyle.videoContent}
            style={{
                zIndex: this.props.backgroundVideoZIndex ? this.props.backgroundVideoZIndex + 1 : 1,
            }}
        >
            {this.props.children}
        </div>);
    }

    private _renderVideo() {

        if (!this.props.backgroundVideo) {
            return null;
        }

        return (<div className={this._blockStyle.videoContainer}>
            <video
                className={this._blockStyle.video}
                style={{
                    zIndex: this.props.backgroundVideoZIndex ?? 0,
                }}
                autoPlay
                muted
                loop
            >
                <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
            </video>
        </div>);
    }

    private _getBackgroundStyle(): React.CSSProperties {

        if (this.props.backgroundVideo) {
            return {
                position: 'relative',
            };
        }

        if (this.props.backgroundImage) {
            return {
                backgroundImage: `url(${this.props.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            };
        }

        if (this.props.backgroundColor) {
            return {
                backgroundColor: this.props.backgroundColor,
            };
        }
        return {};
    }
}

export const Block: React.ComponentType<BlockProps> = withTheme(BlockBase);
