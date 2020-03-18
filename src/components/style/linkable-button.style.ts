/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Linkable Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const LinkableButtonStyleBase: Styles = {

    link: {
        textDecoration: 'none',

        fontWeight: 'normal',
        border: '0px',
        outline: '0px',

        transition: '0.3s all',
    },
    actionLink: {

        cursor: 'pointer',
    },
};

export const LinkableButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Linkable-Button', LinkableButtonStyleBase);
