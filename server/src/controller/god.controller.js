(function() {
    'use strict';

    let God = require('../model/god.model');

    /**
     * @class GodController
     * @description Responsible for managing requests related to {@link God} objects.
     */
    class GodController {

        /**
         * @method getAll
         * @methodOf GodController
         * @description Returns a list containing all the {@link God} objects currently stored in the persistence layer.
         * @param {Object} req   the object used to obtain the request data
         * @param {Object} res   the object used to send the response data
         */
        getAll(req, res) {
            God.all((error, gods) => {
                if(error) throw error;
                res.send({data: gods});
            });
        }

        /**
         * @method getById
         * @methodOf GodController
         * @description Returns a {@link God} object by its ID.
         * @param {Object} req   the object used to obtain the request data
         * @param {Object} res   the object used to send the response data
         */
        getById(req, res) {
            let id = +req.params.id;

            if(!isNaN(id)) {
                God.get(id, (error, gods) => {
                    if(error) throw error;
                    res.send({data: gods});
                });
            } else {
                res.status(400);
                res.send({message: 'ID must be a number.'});
            }
        }
    }

    module.exports = GodController;
})();