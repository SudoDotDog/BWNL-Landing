/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Header Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const HeaderButtonStyleBase: Styles = {

    blueColor: {
        backgroundColor: 'blue',
    },
};

export const HeaderButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Header-Button', HeaderButtonStyleBase);
