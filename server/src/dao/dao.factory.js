(function() {
    'use strict';

    let config        = require('../config');
    let FileDAO       = require('./file.dao');
    let ParserFactory = require('./parser/parser.factory');

    /**
     * @class DAOFactory
     * @description Factory class used to obtain instances of Data Access Objects according to the value set for
     *              the {@link config.persistence} property.
     */
    class DAOFactory {

        /**
         * @method newDAO
         * @description Returns a new DAO instance corresponding to the value set for {@link config.persistence}.
         * @param model the model with which the DAO will interact
         * @returns {Object} a new DAO instance
         */
        static newDAO(model) {
            let dao;
            switch(config.persistence) {
                case 'file': dao = new FileDAO(model, this.parser);
                    break;
            }
            return dao;
        }
    }

    DAOFactory.parser = ParserFactory.newParser();

    module.exports = DAOFactory;
})();
