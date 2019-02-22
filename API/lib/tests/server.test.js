"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

var _mealData = _interopRequireDefault(require("../utils/mealData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;
describe('Test case for meal route', function () {
  describe('api/v1/meals/1 testing for response', function () {
    it('should get a meal option', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/meals/1').expect(200).expect(function (response) {
        expect(response.body).to.be.an('object').to.eql({
          status: 200,
          message: 'Meal has been retrieved successfully',
          data: [_mealData.default[0]]
        }).to.have.all.keys('status', 'data', 'message');
      }).end(done);
    });
  });
  describe('Update a meal option', function () {
    it('should update a specific meal', function (done) {
      (0, _supertest.default)(_index.default).put('/api/v1/meals/1').send({
        name: 'Rice with beef',
        size: 'medium',
        price: '1500',
        summary: 'Rice belongs to the carbohydrate family',
        imageUrl: 'meal1.jpg'
      }).set('Accept', 'application/json').expect(200).expect(function (response) {
        expect(response.body).to.eql({
          status: 200,
          message: 'Meal has been successfully updated',
          data: [{
            id: 1,
            name: 'Rice with beef',
            size: 'medium',
            price: '1500',
            summary: 'Rice belongs to the carbohydrate family',
            imageUrl: 'meal1.jpg'
          }]
        }).to.have.all.keys('status', 'message', 'data');
      }).end(done);
    });
  });
});