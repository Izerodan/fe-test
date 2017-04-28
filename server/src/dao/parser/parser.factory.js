(function() {
    'use strict';

    let config      = require('../../config');
    let CSVParser   = require('./csv.parser');
    let JSONParser  = require('./json.parser');

    /**
     * @class ParserFactory
     * @description Factory class used to obtain instances of Data Access Objects according to the value set for the
     *              {@link config.file.extension} property.
     */
    class ParserFactory {

        /**
         * @method newParser
         * @description Returns a new parser object according to the type of files to parse, defined in the
         *              {@link config.file.extension} property
         * @returns {Object} a new parser instance
         */
        static newParser() {
            let dao;
            switch(config.file.extension) {
                case 'csv': dao = new CSVParser();
                    break;
                case 'json': dao = new JSONParser();
                    break;
                default: throw new Error(`Invalid value for config.file.extension: '${config.file.extension}.`);
            }
            return dao;
        }
    }

    module.exports = ParserFactory;
})();
