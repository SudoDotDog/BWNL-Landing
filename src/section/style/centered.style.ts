/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Centered
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const CenteredStyleBase: Styles = {

    cover: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const CenteredStyle: StyleManager = landingStyleCollection.hydrate('Section-Centered', CenteredStyleBase);
