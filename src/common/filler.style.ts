/**
 * @author WMXPY
 * @namespace Landing_Common
 * @description Filler Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../style";

export const FillerStyleBase: Styles = {

    width: {
        width: '100%',
    },
};

export const FillerStyle: StyleManager = landingStyleCollection.hydrate('Common-Filler', FillerStyleBase);
