describe('File DAO test suite', function() {
    let FileDAO     = require('../../src/dao/file.dao');
    let God         = require('../../src/model/god.model');
    let JSONParser  = require('../../src/dao/parser/json.parser');
    let config      = require('../../src/config');
    let cache       = require('memory-cache');
    let fs          = require('fs');
    let data        = require('../data');

    // Overriding configuration properties for testing purposes
    config.cacheTimeout = 10000;
    config.persistence = 'file';
    config.file = {
        encoding: 'utf8',
        delimiter: ';',
        extension: 'json'
    };

    let parser = new JSONParser();
    let fileDao = new FileDAO(God, parser);
    let gods;

    beforeEach(function() {
        gods = data.map(data => new God(data));

        spyOn(cache, 'get').and.returnValue(null);
        spyOn(cache, 'put');
        spyOn(fs, 'readFile').and.callFake(function(fileName, encoding, callback) {
            callback(null, data);
        });
        spyOn(parser, 'parse').and.callFake(function(data, callback) {
            callback(null, data);
        });
    });

    it('checking object members', function() {
        expect(fileDao.all).toBeDefined();
        expect(fileDao.get).toBeDefined();
        expect(fileDao.model).toEqual(God);
        expect(fileDao.parser).toEqual(parser)
    });

    it('testing a successful response from the \'all\' method', function() {

        fileDao.all(function(error, elements) {
            expect(error).toBeNull();
            expect(elements).toEqual(gods);
        });

        expect(cache.get).toHaveBeenCalled();
        expect(fs.readFile).toHaveBeenCalled();
        expect(parser.parse).toHaveBeenCalled();
        expect(cache.put).toHaveBeenCalled();
    });

    it('testing a cached response from the \'all\' method', function() {

        cache.get.and.returnValue(gods);

        fileDao.all(function(error, elements) {
            expect(error).toBeNull();
            expect(elements).toEqual(gods);
        });

        expect(cache.get).toHaveBeenCalled();
        expect(fs.readFile).not.toHaveBeenCalled();
        expect(parser.parse).not.toHaveBeenCalled();
        expect(cache.put).not.toHaveBeenCalled();
    });

    it('testing a failure response from the \'all\' method, while attempting to read the file', function() {
        let error = new Error();

        fs.readFile.and.callFake(function(fileName, encoding, callback) {
            callback(error);
        });

        fileDao.all(function(error, elements) {
            expect(error).toEqual(error);
            expect(elements).toBeUndefined();
        });

        expect(cache.get).toHaveBeenCalled();
        expect(fs.readFile).toHaveBeenCalled();
        expect(parser.parse).not.toHaveBeenCalled();
        expect(cache.put).not.toHaveBeenCalled();
    });

    it('testing a failure response from the \'all\' method, by a problem raised while parsing', function() {
        let error = new Error();

        parser.parse.and.callFake(function(data, callback) {
            callback(error);
        });

        fileDao.all(function(error, elements) {
            expect(error).toEqual(error);
            expect(elements).toBeUndefined();
        });

        expect(cache.get).toHaveBeenCalled();
        expect(fs.readFile).toHaveBeenCalled();
        expect(parser.parse).toHaveBeenCalled();
        expect(cache.put).not.toHaveBeenCalled();
    });

    it('testing a successful response from the \'get\' method', function() {

        fileDao.get(4, function(error, element) {
            expect(error).toBeNull();
            expect(element).toEqual(new God(data[0]));
        });

        expect(cache.get).toHaveBeenCalled();
        expect(fs.readFile).toHaveBeenCalled();
        expect(parser.parse).toHaveBeenCalled();
        expect(cache.put).toHaveBeenCalled();
    });

    it('testing a failure response from the \'get\' method, while attempting to read the file', function() {
        let error = new Error();

        fs.readFile.and.callFake(function(fileName, encoding, callback) {
            callback(error);
        });

        fileDao.get(4, function(error, element) {
            expect(error).toEqual(error);
            expect(element).toBeUndefined();
        });

        expect(cache.get).toHaveBeenCalled();
        expect(fs.readFile).toHaveBeenCalled();
        expect(parser.parse).not.toHaveBeenCalled();
        expect(cache.put).not.toHaveBeenCalled();
    });
});