/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Footer
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const FooterStyleBase: Styles = {

    cover: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    left: {
        flex: 1,
        margin: '12px',
        minWidth: '256px',
    },
    right: {
        flex: 2,
        display: 'flex',
        flexWrap: 'wrap',
    },
    categoryCover: {
        flex: 1,
        margin: '24px',
    },
    categoryTitle: {
        fontWeight: 'bold',
    },
};

export const FooterStyle: StyleManager = landingStyleCollection.hydrate('Section-Footer', FooterStyleBase);
