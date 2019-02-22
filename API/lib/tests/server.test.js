"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

var _mealData = _interopRequireDefault(require("../utils/mealData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;
describe('Test case for meal route', function () {
  describe('api/v1/meals testing for response', function () {
    it('should get all meals', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/meals').expect(200).expect(function (response) {
        expect(response.body).to.be.an('object').to.have.all.keys('status', 'data');
      }).expect({
        status: 200,
        data: _mealData.default
      }).end(done);
    });
  });
});