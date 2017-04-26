(function() {
    'use strict';

    let parse   = require('csv-parse');
    let config  = require('../../config');

    /**
     * @class CSVParser
     * @description Parser class used to obtain instances of a parser capable of generating model objects by processing
     *              data in CSV format.
     */
    class CSVParser {

        /**
         * @constructor
         * @description Initializes the parser configuration.
         */
        constructor() {
            this.configuration = {
                delimiter: config.file.delimiter,
                auto_parse: true,
                columns: true
            }
        }

        /**
         * @method parse
         * @memberOf CSVParser
         * @param {string} data       the data to parse, in CSV format
         * @param {Function} callback the function executed when the parsing process has finished
         */
        parse(data, callback) {
            parse(data, this.configuration, (error, output) => {
                if(error) return callback(error);

                callback(null, output);
            });
        }
    }

    module.exports = CSVParser;
})();