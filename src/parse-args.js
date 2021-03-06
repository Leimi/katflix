var minimist = require('minimist');

module.exports.makeArray = function makeArray(options) {
    if (!options) {
        return '';
    }
    var args = [];
    for (var opt in options) {
        if (options[opt] === true) {
            args.push('--' + opt);
        } else if (options[opt] !== false) {
            args.push('--' + opt, options[opt]);
        }
    }
    return args;
};

module.exports.makeObject = function makeObject(args) {
    if (!args) {
        return {};
    }
    if (typeof args === "string") {
        args = args.split(' ');
    }
    var options = minimist(args);
    delete options._;
    return options;
};
