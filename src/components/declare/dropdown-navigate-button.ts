/**
 * @author WMXPY
 * @namespace Landing_Components
 * @description Dropdown Navigate Button Declare
 */

export type DropdownNavigateButtonAttach = 'left' | 'right';

export const getDropdownNavigationButtonAttach = (attach?: DropdownNavigateButtonAttach): DropdownNavigateButtonAttach => {

    if (attach) {
        return attach;
    }
    return 'left';
};
