/**
 * @author WMXPY
 * @namespace Landing_Presentation
 * @description Bullet Points Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const BulletPointsStyleBase: Styles = {

    cover: {

    },
    title: {

    },
    list: {
        marginTop: '16px',
    },
    point: {
        marginTop: '5px',
    },
    leading: {
        marginRight: '8px',
    },
};

export const BulletPointsStyle: StyleManager = landingStyleCollection.hydrate('Presentation-Bullet-Points', BulletPointsStyleBase);
