/**
 * @author WMXPY
 * @namespace Landing_Theme
 * @description Default
 */

import { LandingTheme } from "./declare";
import { GRAY, NAVY, BLUE, WHITE } from "@bwnl/shiny-inline";

export const getDefaultTheme = (): LandingTheme => {

    return {

        presentation: {
            containerPadding: {
                large: {
                    padding: '48px',
                },
                medium: {
                    padding: '24px',
                },
                small: {
                    padding: '12px',
                },
            },
        },
        block: {
            verticalPadding: {
                large: {
                    paddingTop: '96px',
                    paddingBottom: '96px',
                },
                medium: {
                    paddingTop: '48px',
                    paddingBottom: '48px',
                },
                small: {
                    paddingTop: '12px',
                    paddingBottom: '12px',
                },
            },
            centered: {
                maxWidth: '80%',
                minWidth: '256px',
            },
        },
        color: {
            majorColor: {
                border: GRAY,
                regular: NAVY,
                link: BLUE,
                navigate: 'lightblue',
                background: WHITE,
                emphasize: BLUE,
            },
        },
        title: {
            majorTitle: {
                fontSize: '36px',
                lineHeight: '38px',
            },
            minorTitle: {
                fontSize: '28px',
                lineHeight: '26px',
            },
            subtitle: {
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: 'normal',
            },
            presentationTitle: {
                fontSize: '24px',
                lineHeight: '26px',
            },
            categoryTitle: {
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: 'bold',
            },
        },
        action: {
            majorAction: {
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: 'bold',
            },
        },
    };
};