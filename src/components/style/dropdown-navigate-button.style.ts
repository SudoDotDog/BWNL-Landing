/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Dropdown Navigate Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const DropdownNavigateButtonStyleBase: Styles = {

    cover: {
        display: 'inline',
        position: 'relative',
    },
    dropdown: {
        top: '100%',
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        transition: '0.3s all',
    },
};

export const DropdownNavigateButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Dropdown-Navigate-Button', DropdownNavigateButtonStyleBase);
