/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Outlined Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const OutlinedButtonStyleBase: Styles = {

    link: {
        textDecoration: 'none',

        fontWeight: 'normal',
        border: '0px',
        outline: '0px',
        paddingLeft: '5px',
        paddingRight: '5px',
        backgroundColor: 'transparent',

        transition: '0.3s all',
    },
    actionLink: {

        cursor: 'pointer',
    },
};

export const OutlinedButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Outlined-Button', OutlinedButtonStyleBase);
