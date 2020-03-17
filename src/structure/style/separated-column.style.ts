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
        justifyContent: 'space-between',
    },
};

export const SeparatedColumnStyle: StyleManager = landingStyleCollection.hydrate('Structure-Separated-Column', SeparatedColumnStyleBase);
