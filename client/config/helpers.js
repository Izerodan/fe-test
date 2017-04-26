let path = require('path');
let _root = path.resolve(__dirname, '..');

/**
 * @method root
 * @description Creates a path from the client's and joins all the {@code args} as folders one after another.
 * @param args  the path components
 * @returns {*} the path
 */
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}
exports.root = root;