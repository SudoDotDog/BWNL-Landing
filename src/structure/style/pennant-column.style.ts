/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Pennant Column Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const PennantColumnStyleBase: Styles = {

    cover: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    left: {
        marginTop: '8px',
        marginBottom: '8px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    raisedLeft: {
        marginTop: '0',
        marginBottom: '0',
        position: 'relative',
    },
    right: {
        marginTop: '8px',
        marginBottom: '8px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    raisedRight: {
        marginTop: '0',
        marginBottom: '0',
        position: 'relative',
    },
};

export const PennantColumnStyle: StyleManager = landingStyleCollection.hydrate('Structure-Pennant-Column', PennantColumnStyleBase);
