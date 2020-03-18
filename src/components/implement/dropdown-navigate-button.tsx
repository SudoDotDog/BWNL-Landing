/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Dropdown Navigate Button
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme } from "../../theme/declare";
import { ThemeProps, withTheme } from "../../theme/theme";
import { DropdownNavigateButtonAttach, getDropdownNavigationButtonAttach } from "../declare/dropdown-navigate-button";
import { DropdownNavigateButtonStyle } from "../style/dropdown-navigate-button.style";
import { NavigateButton, NavigateButtonProps } from "./navigate-button";

export type DropdownNavigateButtonProps = {

    readonly attach?: DropdownNavigateButtonAttach;
} & NavigateButtonProps;

export type DropdownNavigateButtonStates = {

    readonly buttonHover: boolean;
    readonly hover: boolean;
};

type DropdownNavigateButtonWithThemeProps = DropdownNavigateButtonProps & ThemeProps;

class DropdownNavigateButtonBase extends React.Component<DropdownNavigateButtonWithThemeProps, DropdownNavigateButtonStates> {

    public readonly state: DropdownNavigateButtonStates = {

        buttonHover: false,
        hover: false,
    };

    private readonly _dropdownNavigateButtonStyle: Classes = DropdownNavigateButtonStyle.use();

    private readonly _dropdownRef: React.RefObject<HTMLDivElement> = React.createRef();

    public constructor(props: DropdownNavigateButtonWithThemeProps) {

        super(props);

        this._handleOnEnter = this._handleOnEnter.bind(this);
        this._handleOnLeave = this._handleOnLeave.bind(this);
    }

    public render() {

        const theme: LandingTheme = this.props.theme;

        return (<div
            className={this._dropdownNavigateButtonStyle.cover}
        >
            <NavigateButton
                title={this.props.title}
                style={this.props.style}
                href={this.props.href}
                onClick={this.props.onClick}
                emphasizeColor={this.props.emphasizeColor}
                regularColor={this.props.regularColor}
                onHoverStatesChange={(buttonHover: boolean) => this.setState({ buttonHover })}
            />
            <div
                className={this._dropdownNavigateButtonStyle.dropdown}
                style={{
                    ...this._getDropdownAttachStyle(),
                    ...this._getDropdownHeightStyle(),
                }}
                ref={this._dropdownRef}
                onMouseEnter={this._handleOnEnter}
                onMouseLeave={this._handleOnLeave}
            >
                {this.props.children}
            </div>
        </div>);
    }

    private _getDropdownAttachStyle(): React.CSSProperties {

        const attach: DropdownNavigateButtonAttach = getDropdownNavigationButtonAttach(this.props.attach);

        switch (attach) {
            case 'left': return {
                left: 0,
            };
            case 'right': return {
                right: 0,
            };
        }
    }

    private _getDropdownHeightStyle(): React.CSSProperties {

        if (!this._dropdownRef.current) {
            return {
                height: '0px',
            };
        }

        const expend: boolean = this._isExpended();
        if (expend) {
            return {
                height: `${this._dropdownRef.current.scrollHeight}px`,
            };
        }

        return {
            height: '0px',
        };
    }

    private _handleOnEnter(): void {

        this._handleHoverChange(true);
    }

    private _handleOnLeave(): void {

        this._handleHoverChange(false);
    }

    private _handleHoverChange(hover: boolean): void {

        this.setState({
            hover,
        });
    }

    private _isExpended(): boolean {

        return this.state.buttonHover || this.state.hover;
    }

    private _getAttch
}

export const DropdownNavigateButton: React.ComponentType<DropdownNavigateButtonProps> = withTheme(DropdownNavigateButtonBase);
