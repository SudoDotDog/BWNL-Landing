/**
 * @author WMXPY
 * @namespace Landing_Section
 * @description Footer Declare
 */

export type FooterLink = {

    readonly name: string;
    readonly link: string;
};

export type FooterCategory = {

    readonly category: string;
    readonly links: FooterLink[];
};
