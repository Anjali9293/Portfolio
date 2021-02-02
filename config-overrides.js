/* config-overrides.js */
  
const webpack = require('webpack');

module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...
    let plugin = new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    });
    config.plugins.push(plugin);
    return config
}