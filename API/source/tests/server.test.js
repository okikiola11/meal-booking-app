import chai from 'chai';

import request from 'supertest';

import app from '../index';

import allMeals from '../utils/mealData';

import allMenu from '../utils/menuData';

import allOrder from '../utils/orderData';

const {
  expect,
} = chai;

describe('Test case for meal route', () => {
  describe('api/v1/meals/1 testing for response', () => {
    it('should get a meal option', (done) => {
      request(app)
        .get('/api/v1/meals/1')
        .expect(200)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 200,
              message: 'Meal has been retrieved successfully',
              data: [allMeals[0]],
            })
            .to.have.all.keys('status', 'data', 'message');
        })
        .end(done);
    });
  });

  describe('api/v1/meals testing for response', () => {
    it('should get all meals', (done) => {
      request(app)
        .get('/api/v1/meals')
        .expect(200)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.have.all.keys('status', 'data');
        })
        .expect({
          status: 200,
          data: allMeals,
        })
        .end(done);
    });
  });


});