/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Double Column
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const DoubleColumnStyleBase: Styles = {

    cover: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    left: {
        marginTop: '8px',
        marginBottom: '8px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        marginTop: '8px',
        marginBottom: '8px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const DoubleColumnStyle: StyleManager = landingStyleCollection.hydrate('Structure-Double-Column', DoubleColumnStyleBase);
