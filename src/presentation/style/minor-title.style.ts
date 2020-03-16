/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Minor Title Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const MinorTitleStyleBase: Styles = {

    title: {

    },
    subtitle: {

    },
};

export const MinorTitleStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Minor-Title', MinorTitleStyleBase);
