/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Tilt Card Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const TiltCardStyleBase: Styles = {
};

export const TiltCardStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Tilt-Card', TiltCardStyleBase);
