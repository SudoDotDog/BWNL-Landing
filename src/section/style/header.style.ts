/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Header
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const HeaderStyleBase: Styles = {
};

export const HeaderStyle: StyleManager = landingStyleCollection.hydrate('Section-Header', HeaderStyleBase);
