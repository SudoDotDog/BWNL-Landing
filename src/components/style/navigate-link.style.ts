/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Link Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const NavigateLinkStyleBase: Styles = {
};

export const NavigateLinkStyle: StyleManager = landingStyleCollection.hydrate('Components-Navigate-Link', NavigateLinkStyleBase);
