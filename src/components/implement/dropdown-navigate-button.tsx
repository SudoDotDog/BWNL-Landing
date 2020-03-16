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
};

type DropdownNavigateButtonWithThemeProps = DropdownNavigateButtonProps & ThemeProps;

class DropdownNavigateButtonBase extends React.Component<DropdownNavigateButtonWithThemeProps, DropdownNavigateButtonStates> {

    public readonly state: DropdownNavigateButtonStates = {

        buttonHover: false,
    };

    private readonly _dropdownNavigateButtonStyle: Classes = DropdownNavigateButtonStyle.use();

    public render() {

        const theme: LandingTheme = this.props.theme;
        const emphasize: boolean = this._isEmphasized();

        return (<div>
            <NavigateButton
                title={this.props.title}
                onClick={this.props.onClick}
                style={this.props.style}
            />
        </div>);
    }

    private _isEmphasized(): boolean {

        if (!this.state.buttonHover) {
            return false;
        }

        if (Boolean(this.props.onClick)) {
            return true;
        }

        return false;
    }
}

export const DropdownNavigateButton: React.ComponentType<DropdownNavigateButtonProps> = withTheme(DropdownNavigateButtonBase);
