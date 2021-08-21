const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
const webpackPreprocessor = require('../../')

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor, webpackPreprocessor())
}

