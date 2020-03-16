/**
 * @author WMXPY
 * @namespace Landing
 * @description DOCZ_RC
 */

export default {
    title: 'BWNL Landing',
    filterComponents: (files) =>
        files.filter(filePath => /[w-]*.(js|jsx|ts|tsx)$/.test(filePath)),
    codeSandbox: false,
    typescript: true,
}
