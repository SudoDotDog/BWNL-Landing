/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Navigate Button Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const NavigateButtonStyleBase: Styles = {

    blueColor: {
        backgroundColor: 'blue',
    },
};

export const NavigateButtonStyle: StyleManager = landingStyleCollection.hydrate('Components-Navigate-Button', NavigateButtonStyleBase);
