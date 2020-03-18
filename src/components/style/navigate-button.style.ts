/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const NavigateButtonStyleBase: Styles = {

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

export const NavigateButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Navigate-Button', NavigateButtonStyleBase);
