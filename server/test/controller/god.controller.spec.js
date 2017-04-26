describe('God Controller test suite', function() {
    let GodController = require('../../src/controller/god.controller');
    let God           = require('../../src/model/god.model');

    let godController = new GodController();

    let error = new Error();
    let response;
    let request = {
        params: {
            id: 1
        }
    };

    let successCallback = function() {
        if(arguments.length == 1) {
            arguments[0](null, {});
        } else {
            arguments[1](null, {});
        }
    };

    let errorCallback = function() {
        if(arguments.length == 1) {
            arguments[0](error);
        } else {
            arguments[1](error);
        }
    };

    beforeEach(function() {
        response = jasmine.createSpyObj('res', ['send', 'status']);
        spyOn(God, 'all');
        spyOn(God, 'get');
    });

    it('c object members', function() {
        expect(godController.getAll).toBeDefined();
        expect(godController.getById).toBeDefined();
    });

    it('testing a successful response from the \'getAll\' method', function() {
        God.all.and.callFake(successCallback);
        try {
            godController.getAll(request, response);
        } catch(e) {
            fail();
        }
        expect(God.all).toHaveBeenCalled();
        expect(response.send).toHaveBeenCalled();
    });

    it('testing a failure response from the \'getAll\' method', function() {
        God.all.and.callFake(errorCallback);
        try {
            godController.getAll(request, response);
        } catch(e) {
            expect(e).toEqual(error);
        }
        expect(God.all).toHaveBeenCalled();
        expect(response.send).not.toHaveBeenCalled();
    });

    it('testing a successful response from the \'getById\' method', function() {
        God.get.and.callFake(successCallback);
        try {
            godController.getById(request, response);
        } catch(e) {
            fail();
        }
        expect(God.get).toHaveBeenCalled();
        expect(response.send).toHaveBeenCalled();
    });

    it('testing a failure response from the \'getById\' method', function() {
        God.get.and.callFake(errorCallback);
        try {
            godController.getById(request, response);
        } catch(e) {
            expect(e).toEqual(error);
        }
        expect(God.get).toHaveBeenCalled();
        expect(response.send).not.toHaveBeenCalled();
    });
});