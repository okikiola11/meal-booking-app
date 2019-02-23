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

  describe('posting a meal', () => {
    it('should make a post for a specific meal', (done) => {
      request(app)
        .post('/api/v1/meals')
        .send({
          name: 'Rice with beef',
          size: 'medium',
          price: '1500',
          summary: 'Rice belongs to the carbohydrate family',
          imageUrl: 'meal1.jpg',
        })
        .set('Accept', 'application/json')
        .expect(201)
        .expect((response) => {
          expect(response.body)
            .to.eql({
              status: 201,
              message: 'New meal has been added',
              data: [{
                id: 5,
                name: 'Rice with beef',
                size: 'medium',
                price: '1500',
                summary: 'Rice belongs to the carbohydrate family',
                imageUrl: 'meal1.jpg',
              }],
            })
            .to.have.all.keys('status', 'message', 'data');
        })
        .end(done);
    });
  });

  describe('Update a meal option', () => {
    it('should update a specific meal', (done) => {
      request(app)
        .put('/api/v1/meals/1')
        .send({
          name: 'Rice with beef',
          size: 'medium',
          price: '1500',
          summary: 'Rice belongs to the carbohydrate family',
          imageUrl: 'meal1.jpg',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .expect((response) => {
          expect(response.body)
            .to.eql({
              status: 200,
              message: 'Meal has been successfully updated',
              data: [{
                id: 1,
                name: 'Rice with beef',
                size: 'medium',
                price: '1500',
                summary: 'Rice belongs to the carbohydrate family',
                imageUrl: 'meal1.jpg',
              }],
            })
            .to.have.all.keys('status', 'message', 'data');
        })
        .end(done);
    });
  });

  describe('Delete a meal option', () => {
    it('should delete a specific meal', (done) => {
      request(app)
        .delete('/api/v1/meals/1')
        .expect(200)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 200,
              message: 'Meal record deleted successfully',
              data: [],
            })
            .to.have.all.keys('status', 'data', 'message');
        })
        .end(done);
    });
  });
});

describe('Test case for menu route', () => {
  describe('api/v1/menu testing for response', () => {
    it('should get all menu', (done) => {
      request(app)
        .get('/api/v1/menu')
        .expect(200)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.have.all.keys('status', 'data');
        })
        .expect({
          status: 200,
          data: allMenu,
        })
        .end(done);
    });
  });
});
