(function() {
    'use strict';

    let config  = require('../../config');

    /**
     * @class JSONParser
     * @description Parser class used to obtain instances of a parser capable of generating model objects by processing
     *              data in JSON format.
     */
    class JSONParser {

        /**
         * @method parse
         * @memberOf CSVParser
         * @param {string} data       the data to parse, in JSON format
         * @param {Function} callback the function executed when the parsing process has finished
         */
        parse(data, callback) {
            try {
                let output  = JSON.parse(data);
                callback(null, output);
            } catch(e) {
                callback(e);
            }
        }
    }

    module.exports = JSONParser;
})();
