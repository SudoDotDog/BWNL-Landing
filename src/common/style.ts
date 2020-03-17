/**
 * @author WMXPY
 * @namespace Landing_Common
 * @description Style
 */

import * as React from "react";
import { LandingTheme } from "../theme";

export type SizeType = 'small' | 'medium' | 'large';

export const getVerticalPaddingStyle = (theme: LandingTheme, size?: SizeType): React.CSSProperties => {

    if (!size) {
        return {};
    }

    switch (size) {
        case 'large': return theme.block.verticalPadding.large;
        case 'medium': return theme.block.verticalPadding.medium;
        case 'small': return theme.block.verticalPadding.small;
    }
    return {};
};

export const getPresentationContainerPaddingStyle = (theme: LandingTheme, size?: SizeType): React.CSSProperties => {

    if (!size) {
        return {};
    }

    switch (size) {
        case 'large': return theme.presentation.containerPadding.large;
        case 'medium': return theme.presentation.containerPadding.medium;
        case 'small': return theme.presentation.containerPadding.small;
    }
    return {};
};
