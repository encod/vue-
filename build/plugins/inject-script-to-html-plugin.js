var _ = require('lodash')
var fs = require('fs')

/**
 *
 * @param {object} options.paths
 */
function InjectScriptToHtml(options) {
    var opts = _.cloneDeep(options);

    if(_.isString(opts.path)){
        opts.path = [opts.path]
    }

    this.options = opts;
}

InjectScriptToHtml.prototype.apply = function (compiler) {
    var self = this;

    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback){
            self.injectScript(htmlPluginData, callback)
        });
    })
};

InjectScriptToHtml.prototype.injectScript = function (htmlPluginData, callback) {
    var self = this;
    var promiseArray = _.map(self.options.path, function(path){
        if(!_.isString(path)){
            throw new Error('InjectScriptToHtmlPlugin: file must be string')
        }
        return readFilePromise(path)
    })
    Promise.all(promiseArray).then(function(scripts){
        var scripts = _.map(scripts, function(script){
            return ';(function(){\n' + script + '\n})();'
        }).join('\n')
        htmlPluginData.html = htmlPluginData.html.replace('</head>', '<script>' + scripts + '</script></head>')
        callback(null, htmlPluginData);
    })
}


function readFilePromise(file){
    return new Promise(function(resolve, reject){
        fs.readFile(file, function(err, data){
            if(err){
                reject(err)
            }else{
                resolve(data.toString())
            }
        })
    })
}


module.exports = InjectScriptToHtml;
