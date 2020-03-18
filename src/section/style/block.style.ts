/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Block Style
 */

import { StyleManager, Styles } from "@sudoo/jss";
import { landingStyleCollection } from "../../style";

export const BlockStyleBase: Styles = {

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    videoContent: {
        position: 'relative',
    },
    videoContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
    },
    video: {
        width: '100%',
    },
};

export const BlockStyle: StyleManager = landingStyleCollection.hydrate('Section-Block', BlockStyleBase);
