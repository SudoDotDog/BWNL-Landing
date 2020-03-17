/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Centered Block Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const CenteredBlockStyleBase: Styles = {

    cover: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const CenteredBlockStyle: StyleManager = landingStyleCollection.hydrate('Section-Centered-Block', CenteredBlockStyleBase);
