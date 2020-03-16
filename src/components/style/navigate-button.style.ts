/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const NavigateButtonStyleBase: Styles = {

    button: {
        border: '0px',
        outline: '0px',
        padding: '8px',
        backgroundColor: 'transparent',
    },
};

export const NavigateButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Navigate-Button', NavigateButtonStyleBase);
