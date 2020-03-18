/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Raised Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const RaisedButtonStyleBase: Styles = {
};

export const RaisedButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Raised-Button', RaisedButtonStyleBase);
