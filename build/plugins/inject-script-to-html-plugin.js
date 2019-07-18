var _ = require('lodash')
var fs = require('fs')
const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin');
/**
 *
 * @param {object} options.paths
 */
function InjectScriptToHtml (options) {
    var opts = _.cloneDeep(options)

    if (_.isString(opts.path)) {
        opts.path = [opts.path]
    }

    this.options = opts
}

InjectScriptToHtml.prototype.apply = function (compiler) {
    var self = this
    // webpack4 以上的兼容方法
    compiler.hooks.compilation.tap('InjectScriptToHtml',(compilation)=>{
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
            'InjectScriptToHtml', // <-- Set a meaningful name here for stacktraces
            (data, cb) => {
              self.injectScript(data, cb)
            }
          )
    } )
}

InjectScriptToHtml.prototype.injectScript = function (htmlPluginData, callback) {
    var self = this
    var promiseArray = _.map(self.options.path, function (path) {
        if (!_.isString(path)) {
            throw new Error('InjectScriptToHtmlPlugin: file must be string')
        }
        return readFilePromise(path)
    })
    Promise.all(promiseArray).then(function (scripts) {
        var scripts = _.map(scripts, function (script) {
            return ';(function(){\n' + script + '\n})();'
        }).join('\n')
        htmlPluginData.html = htmlPluginData.html.replace('</head>', '<script>' + scripts + '</script></head>')
        callback?callback(null, htmlPluginData):''
    })
}

function readFilePromise (file) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    })
}

module.exports = InjectScriptToHtml
