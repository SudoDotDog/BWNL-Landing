/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Outlined Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const OutlinedButtonStyleBase: Styles = {

    link: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '4px',
    },
};

export const OutlinedButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Outlined-Button', OutlinedButtonStyleBase);
