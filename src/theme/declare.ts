/**
 * @author WMXPY
 * @namespace Landing_Theme
 * @description Declare
 */

export type LandingTheme = {

    readonly components: {
        readonly buttonPadding: {
            readonly large: React.CSSProperties;
            readonly medium: React.CSSProperties;
            readonly small: React.CSSProperties;
        };
    };
    readonly presentation: {
        readonly containerPadding: {
            readonly large: React.CSSProperties;
            readonly medium: React.CSSProperties;
            readonly small: React.CSSProperties;
        };
    };
    readonly block: {
        readonly verticalPadding: {
            readonly large: React.CSSProperties;
            readonly medium: React.CSSProperties;
            readonly small: React.CSSProperties;
        };
        readonly centered: {
            readonly maxWidth: string;
            readonly minWidth: string;
        };
    };
    readonly color: {
        readonly majorColor: {
            readonly border: string;
            readonly regular: string;
            readonly link: string;
            readonly navigate: string;
            readonly background: string;
            readonly emphasize: string;
        };
    };
    readonly title: {
        readonly majorTitle: React.CSSProperties;
        readonly minorTitle: React.CSSProperties;
        readonly subtitle: React.CSSProperties;
        readonly presentationTitle: React.CSSProperties;
        readonly categoryTitle: React.CSSProperties;
    };
    readonly action: {
        readonly majorAction: React.CSSProperties;
    };
};
