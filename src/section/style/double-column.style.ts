/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Double Column
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const DoubleColumnSectionStyleBase: Styles = {

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

export const DoubleColumnSectionStyle: StyleManager = landingStyleCollection.hydrate('Section-Double-Column', DoubleColumnSectionStyleBase);
