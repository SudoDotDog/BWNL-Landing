/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Dropdown Navigate Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const DropdownNavigateButtonStyleBase: Styles = {

};

export const DropdownNavigateButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Dropdown-Navigate-Button', DropdownNavigateButtonStyleBase);
