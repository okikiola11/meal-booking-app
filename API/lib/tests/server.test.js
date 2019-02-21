"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

var _mealData = _interopRequireDefault(require("../utils/mealData"));

var _menuData = _interopRequireDefault(require("../utils/menuData"));

var _orderData = _interopRequireDefault(require("../utils/orderData"));

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
  describe('posting a meal', function () {
    it('should make a post for a specific meal', function (done) {
      (0, _supertest.default)(_index.default).post('/api/v1/meals').send({
        name: 'Rice with beef',
        size: 'medium',
        price: '1500',
        summary: 'Rice belongs to the carbohydrate family',
        imageUrl: 'meal1.jpg'
      }).set('Accept', 'application/json').expect(201).expect(function (response) {
        expect(response.body).to.eql({
          status: 201,
          message: 'New meal has been added',
          data: [{
            id: 5,
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
  describe('Delete a meal option', function () {
    it('should delete a specific meal', function (done) {
      (0, _supertest.default)(_index.default).delete('/api/v1/meals/1').expect(200).expect(function (response) {
        expect(response.body).to.be.an('object').to.eql({
          status: 200,
          message: 'Meal record deleted successfully',
          data: []
        }).to.have.all.keys('status', 'data', 'message');
      }).end(done);
    });
  });
});
describe('Test case for menu route', function () {
  describe('api/v1/menu testing for response', function () {
    it('should get all menu', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/menu').expect(200).expect(function (response) {
        expect(response.body).to.be.an('object').to.have.all.keys('status', 'data');
      }).expect({
        status: 200,
        data: _menuData.default
      }).end(done);
    });
  });
  describe('posting a menu', function () {
    it('should make a post for a specific menu', function (done) {
      (0, _supertest.default)(_index.default).post('/api/v1/menu').send({
        menuType: 'Special',
        meal: 'Rice with beef',
        size: 'medium',
        price: 1500,
        summary: 'Rice belongs to the carbohydrate family',
        imageUrl: 'meal1.jpg'
      }).set('Accept', 'application/json').expect(201).expect(function (response) {
        expect(response.body).to.eql({
          status: 201,
          message: 'New menu has been added',
          data: [{
            id: 5,
            menuType: 'Special',
            meal: 'Rice with beef',
            size: 'medium',
            price: 1500,
            summary: 'Rice belongs to the carbohydrate family',
            imageUrl: 'meal1.jpg'
          }]
        }).to.have.all.keys('status', 'message', 'data');
      }).end(done);
    });
  });
});
describe('Test case for Order route', function () {
  describe('api/v1/order testing for response', function () {
    it('should get all order', function (done) {
      (0, _supertest.default)(_index.default).get('/api/v1/order').expect(200).expect(function (response) {
        expect(response.body).to.be.an('object').to.have.all.keys('status', 'data');
      }).expect({
        status: 200,
        data: _orderData.default
      }).end(done);
    });
  });
  describe('posting an order', function () {
    it('should make a post for a specific order', function (done) {
      (0, _supertest.default)(_index.default).post('/api/v1/order').send({
        menuType: 'Special',
        meal: 'Rice with beef',
        size: 'medium',
        order: 20,
        price: 1500,
        customerEmail: 'okiki@gmail.com',
        imageUrl: 'meal1.jpg'
      }).set('Accept', 'application/json').expect(201).expect(function (response) {
        expect(response.body).to.eql({
          status: 201,
          message: 'New order has been added',
          data: [{
            id: 5,
            menuType: 'Special',
            meal: 'Rice with beef',
            size: 'medium',
            order: 20,
            price: 1500,
            customerEmail: 'okiki@gmail.com',
            imageUrl: 'meal1.jpg'
          }]
        }).to.have.all.keys('status', 'message', 'data');
      }).end(done);
    });
  });
  describe('Update an order', function () {
    it('should modify a specific order', function (done) {
      (0, _supertest.default)(_index.default).put('/api/v1/order/1').send({
        menuType: 'Special',
        meal: 'Rice with beef',
        size: 'medium',
        order: 10,
        price: 1500,
        customerEmail: 'shade@gmail.com',
        imageUrl: 'meal1.jpg'
      }).set('Accept', 'application/json').expect(200).expect(function (response) {
        expect(response.body).to.eql({
          status: 200,
          message: 'Order has been successfully modified',
          data: [{
            id: 1,
            menuType: 'Special',
            meal: 'Rice with beef',
            size: 'medium',
            order: 10,
            price: 1500,
            customerEmail: 'shade@gmail.com',
            imageUrl: 'meal1.jpg'
          }]
        }).to.have.all.keys('status', 'message', 'data');
      }).end(done);
    });
  });
});