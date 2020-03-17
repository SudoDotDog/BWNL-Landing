/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Bordered Card Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const BorderedCardStyleBase: Styles = {

    card: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '4px',
    },
};

export const BorderedCardStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Bordered-Card', BorderedCardStyleBase);
