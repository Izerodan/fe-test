describe('God Model test suite', function() {
    let God = require('../../src/model/god.model');
    let dao = {
        all: function(callback) {
            callback(null, {});
        },
        get: function(id, callback) {
            callback(null, {});
        }
    };
    let failureDao = {
        all: function(callback) {
            callback(new Error());
        },
        get: function(id, callback) {
            callback(new Error());
        }
    };

    beforeEach(function() {
        spyOn(dao, 'all');
        spyOn(dao, 'get');
        spyOn(failureDao, 'all');
        spyOn(failureDao, 'get');

    });

    it('checking static members', function() {
        expect(God.all).toBeDefined();
        expect(God.get).toBeDefined();
    });

    it('testing constructor', function() {
        let data = {
            id: 1,
            greekName: 'Zeus',
            romanName: 'Jupiter',
            role: 'God of the sky, ruler of Olympus',
            symbols: 'Thunderbolt, eagle, oak',
            heads: 2
        };

        let god = new God(data);

        expect(god.id).toEqual(data.id);
        expect(god.greekName).toEqual(data.greekName);
        expect(god.romanName).toEqual(data.romanName);
        expect(god.role).toEqual(data.role);
        expect(god.symbols).toEqual(data.symbols);
        expect(god.heads).toBeUndefined();
    });

    it('testing a successful response from the \'all\' method', function() {
        God.dao = dao;
        God.all(function(error, data) {
            expect(error).toBeNull();
            expect(data).toEqual({});
        });

        expect(dao.all).toHaveBeenCalled();
    });

    it('testing a failure response from the \'all\' method', function() {
        God.dao = failureDao;
        God.all(function(error, data) {
            expect(error).toEqual(new Error());
            expect(data).toBeUndefined()
        });

        expect(failureDao.all).toHaveBeenCalled();
    });

    it('testing a successful response from the \'get\' method', function() {
        God.dao = dao;
        God.get(1, function(error, data) {
            expect(error).toBeNull();
            expect(data).toEqual({});
        });

        expect(dao.get).toHaveBeenCalled();
    });

    it('testing a failure response from the \'get\' method', function() {
        God.dao = failureDao;
        God.get(1, function(error, data) {
            expect(error).toEqual(new Error());
            expect(data).toBeUndefined()
        });

        expect(failureDao.get).toHaveBeenCalled();
    });
});