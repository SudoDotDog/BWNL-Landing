/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Feature Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const FeatureStyleBase: Styles = {

    topping: {
        marginBottom: '6px',
    },
    leadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leadingContent: {
        flex: 1,
    },
    leading: {
        width: 'auto',
        marginRight: '12px',
    },
    title: {

    },
    description: {
        marginTop: '8px',
    },
};

export const FeatureStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Feature', FeatureStyleBase);
