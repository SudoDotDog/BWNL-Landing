/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Footer
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const FooterStyleBase: Styles = {
};

export const FooterStyle: StyleManager = landingStyleCollection.hydrate('Section-Footer', FooterStyleBase);
