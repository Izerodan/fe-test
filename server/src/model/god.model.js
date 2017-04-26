(function() {
    'use strict';

    let DAOFactory  = require('../dao/dao.factory');

    /**
     * @class God
     * @description Represents a mythological god.
     */
    class God {

        /**
         * @constructor
         * @description Creates a new {@link God} instance.
         * @param {Object} data an object containing the user's properties.
         * @param {number} data.id          the id of the user
         * @param {string} data.greekName   the email of the user
         * @param {string} data.romanName   the email of the user
         * @param {string} data.role        the name of the user
         * @param {string} data.symbols     the birth date of the user
         */
        constructor(data) {
            this.id         = data.id;
            this.greekName  = data.greekName;
            this.romanName  = data.romanName;
            this.role       = data.role;
            this.symbols    = data.symbols;
        }

        /**
         * @method all
         * @memberOf God
         * @description Retrieves all the {@link God} objects from the current persistence layer
         * @param {Function} callback   the function executed when the retrieval has finished
         */
        static all(callback) {
            this.dao.all((error, users) => {
                if(error) return callback(error);
                callback(null, users);
            });
        }

        /**
         * @method get
         * @memberOf God
         * @description Retrieves a {@link God} by its id.
         * @param {number} id           the id of the god to retrieve
         * @param {Function} callback   the function executed when the retrieval has finished
         */
        static get(id, callback) {
            this.dao.get(id, (error, users) => {
                if(error) return callback(error);
                callback(null, users);
            })
        };
    }

    God.dao = DAOFactory.newDAO(God);

    module.exports = God;
})();