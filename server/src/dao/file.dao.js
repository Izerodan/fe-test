(function() {
    'use strict';

    let fs            = require('fs');
    let cache         = require('memory-cache');
    let config        = require('../config');

    /**
     * @class FileDAO
     * @description Data Access Object class used to manage data stored in CSV files.
     */
    class FileDAO {

        /**
         * @constructor
         * @param {Object} model    the type of model objects to be retrieved by this instance
         * @param {Object} parser   the parser used to process the file's data
         */
        constructor(model, parser) {
            this.model = model;
            this.parser = parser;
        }

        /**
         * @method all
         * @memberOf FileDAO
         * @description Returns all the {@link model} elements currently stored in the persistence layer.
         * @param {Function} callback the function executed when the retrieval has finished
         */
        all(callback) {
            let Model  = this.model;
            let parser = this.parser;
            let modelName = Model.name.toLowerCase();
            let extension = config.file.extension;
            let encoding  = config.file.encoding;

            let elements = cache.get(modelName);

            if(null == elements) {
                fs.readFile(`${modelName}.${extension}`, encoding, (error, data) => {
                    if(error) return callback(error);

                    parser.parse(data, (error, output) => {
                        if(error) return callback(error);

                        elements = output.map((data) => new Model(data));

                        cache.put(modelName, elements, config.cacheTimeout);
                        callback(null, elements);
                    });
                });
            } else {
                callback(null, elements);
            }
        }

        /**
         * @method get
         * @memberOf FileDAO
         * @description Returns a {@link model} element by its {@code id} currently stored in the persistence layer.
         * @param {number} id           the id of the {@link model} to retrieve
         * @param {Function} callback   the function executed when the retrieval has finished
         */
        get(id, callback) {
            this.all((error, data) => {
                if(error) return callback(error);

                let element = null;
                let x = data.length;
                while(x-- && null == element) {
                    if(data[x].id === id) {
                        element = data[x];
                    }
                }
                callback(null, element);
            });
        }
    }

    module.exports = FileDAO;
})();