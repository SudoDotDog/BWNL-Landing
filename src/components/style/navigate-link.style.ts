/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Link Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const NavigateLinkStyleBase: Styles = {

    link: {
        textDecoration: 'none',
    },
    actionLink: {
        cursor: 'pointer',
    },
    actionField: {
        transition: '0.1s all',
        marginLeft: '0px',
    },
    actionMarginLeft: {
        marginLeft: '3px',
    },
};

export const NavigateLinkStyle: StyleManager = landingStyleCollection.hydrate('Components-Navigate-Link', NavigateLinkStyleBase);
