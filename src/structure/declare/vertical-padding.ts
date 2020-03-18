/**
 * @author WMXPY
 * @namespace Landing_Structure
 * @description Vertical Padding Declare
 */

import { SizeType } from "../../common/style";

export type VerticalPaddingOnly = 'top' | 'bottom';

export type VerticalPaddingProps = {

    readonly verticalPadding?: SizeType;
    readonly verticalPaddingOnly?: VerticalPaddingOnly;
};
