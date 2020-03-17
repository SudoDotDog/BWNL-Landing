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
        marginTop: '12px',
        marginBottom: '12px',
        minWidth: '256px',
    },
    right: {
        flex: 2,
        display: 'flex',
        flexWrap: 'wrap',
    },
    categoryCover: {
        flex: 1,
        marginLeft: '12px',
        marginRight: '12px',
    },
    categoryTitle: {
        fontWeight: 'bold',
        marginBottom: '8px',
        marginTop: '8px',
    },
    link: {
        textDecoration: 'none',
    },
};

export const FooterStyle: StyleManager = landingStyleCollection.hydrate('Section-Footer', FooterStyleBase);
