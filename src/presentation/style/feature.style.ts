/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Feature Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const FeatureStyleBase: Styles = {

    leading: {
        marginBottom: '6px',
    },
    title: {

    },
    description: {
        marginTop: '8px',
    },
};

export const FeatureStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Feature', FeatureStyleBase);
