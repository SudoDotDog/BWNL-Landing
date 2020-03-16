/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Double Column
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const DoubleColumnSectionBase: Styles = {

    leading: {
        marginBottom: '6px',
    },
    title: {

    },
    description: {
        marginTop: '8px',
    },
};

export const DoubleColumnSection: StyleManager = landingStyleCollection.hydrate('Section-Double-Column', DoubleColumnSectionBase);
