import chai from 'chai';

import request from 'supertest';

import app from '../index';

import allMeals from '../utils/mealData';

const {
  expect,
} = chai;

describe('Test case for meal route', () => {
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
