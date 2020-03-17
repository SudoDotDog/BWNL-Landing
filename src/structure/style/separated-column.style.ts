/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Separated Column
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const SeparatedColumnStyleBase: Styles = {

    cover: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        margin: '8px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        margin: '8px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const SeparatedColumnStyle: StyleManager = landingStyleCollection.hydrate('Structure-Separated-Column', SeparatedColumnStyleBase);
