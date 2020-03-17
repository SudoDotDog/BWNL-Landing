/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Holy Grail Grid Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const HolyGrailGridStyleBase: Styles = {

    cover: {
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
    },
};

export const HolyGrailGridStyle: StyleManager = landingStyleCollection.hydrate('Structure-Holy-Grail-Grid', HolyGrailGridStyleBase);
