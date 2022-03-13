/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import translations from './translations.json';

/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
let formatMessage = messageData => messageData.defaultMessage;

const entry = {
    get name () {
        return formatMessage({
            id: 'tpLinkPlug.entry.name',
            default: 'TP-Link Plug',
            description: 'name of the extension'
        });
    },
    extensionId: 'tpLinkPlug',
    extensionURL: 'https://nomukatsu1018.github.io/xcx-tplink-plug/dist/tpLinkPlug.mjs',
    collaborator: 'nomukatsu1018',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'an extension for Xcratch',
            description: 'Description for this extension',
            id: 'tpLinkPlug.entry.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://nomukatsu1018.github.io/xcx-tplink-plug/',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
