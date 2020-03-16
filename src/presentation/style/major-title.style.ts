/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Major Title Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const MajorTitleStyleBase: Styles = {

    title: {

    },
    subtitle: {

    },
};

export const MajorTitleStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Major-Title', MajorTitleStyleBase);
