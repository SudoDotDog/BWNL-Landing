/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Bullet Points Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const BulletPointsStyleBase: Styles = {

    blueColor: {
        backgroundColor: 'blue',
    },
};

export const BulletPointsStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Bullet-Points', BulletPointsStyleBase);
