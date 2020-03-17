/**
 * @author WMXPY
 * @namespace Landing_Common
 * @description Remover Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const RemoverStyleBase: Styles = {

    paddingAndMargin: {
        padding: '0px',
        margin: '0px',
    },
};

export const RemoverStyle: StyleManager = landingStyleCollection.hydrate('Common-Remover', RemoverStyleBase);
