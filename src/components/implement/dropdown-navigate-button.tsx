/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Dropdown Navigate Button
 */

import { Classes } from "@sudoo/jss";
import * as React from "react";
import { LandingTheme, ThemeProps, withTheme } from "../../theme";
import { DropdownNavigateButtonStyle } from "../style/dropdown-navigate-button.style";
import { NavigateButton, NavigateButtonProps } from "./navigate-button";

export type DropdownNavigateButtonProps = {
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
                onClick={this.props.onClick}
                onHoverStatesChange={(buttonHover: boolean) => this.setState({ buttonHover })}
            />
            <div
                className={this._dropdownNavigateButtonStyle.dropdown}
                style={{
                    height: this._getDropdownHeight(),
                }}
                ref={this._dropdownRef}
                onMouseEnter={this._handleOnEnter}
                onMouseLeave={this._handleOnLeave}
            >
                {this.props.children}
            </div>
        </div>);
    }

    private _getDropdownHeight(): string {

        if (!this._dropdownRef.current) {
            return '0px';
        }

        const expend: boolean = this._isExpended();
        if (expend) {
            return `${this._dropdownRef.current.scrollHeight}px`;
        }

        return '0px';
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
}

export const DropdownNavigateButton: React.ComponentType<DropdownNavigateButtonProps> = withTheme(DropdownNavigateButtonBase);
