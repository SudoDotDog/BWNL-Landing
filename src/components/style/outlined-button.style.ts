/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Outlined Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const OutlinedButtonStyleBase: Styles = {
};

export const OutlinedButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Outlined-Button', OutlinedButtonStyleBase);
