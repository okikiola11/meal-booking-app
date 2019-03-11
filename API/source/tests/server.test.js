import chai from 'chai';

import request from 'supertest';

import app from '../index';

import allMeals from '../utils/mealData';

import allMenu from '../utils/menuData';

import allOrder from '../utils/orderData';

const {
  expect,
} = chai;

describe('Test case for the default for the meal booking route /', () => {
  describe('/ testing for response', () => {
    it('should return a welcome message to the user', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((response) => {
          expect(response.text)
            .to.be.a('string')
            .to.equal('Welcome, to the Meal Booking Application!');
        })
        .end(done);
    });
  });

  describe('/ testing for endpoints that do not exist', () => {
    it('should return 404 error', (done) => {
      request(app)
        .get('/google')
        .expect(404)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 404,
              message: 'The endpoint you have requested does not exist on this server',
            })
            .to.have.all.keys('status', 'message');
        })
        .end(done);
    });
  });
});

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

    it('should return an error message if the meal does not exist', (done) => {
      request(app)
        .get('/api/v1/meals/70')
        .expect(404)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 404,
              message: 'Meal Id does not exist',
            })
            .to.have.all.keys('status', 'message');
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

    it('should return an error message if the items deleted does not exist', (done) => {
      request(app)
        .delete('/api/v1/meals/70')
        .expect(404)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 404,
              error: 'Oooops! no record with such Id',
            })
            .to.have.all.keys('status', 'error');
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

    it('should return an error message if the items does not update', (done) => {
      request(app)
        .put('/api/v1/meals/70')
        .send({
          name: 'Rice with beef',
          size: 'medium',
          price: '1500',
          summary: 'Rice belongs to the carbohydrate family',
          imageUrl: 'meal1.jpg',
        })
        .set('Accept', 'application/json')
        .expect(404)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 404,
              error: 'record id not found',
            })
            .to.have.all.keys('status', 'error');
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

    it('should return an error message if the items deleted does not exist', (done) => {
      request(app)
        .delete('/api/v1/meals/70')
        .expect(404)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 404,
              error: 'Oooops! no record with such Id',
            })
            .to.have.all.keys('status', 'error');
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

  describe('posting a menu', () => {
    it('should make a post for a specific menu', (done) => {
      request(app)
        .post('/api/v1/menu')
        .send({
          menuType: 'Special',
          meal: 'Rice with beef',
          size: 'medium',
          price: 1500,
          summary: 'Rice belongs to the carbohydrate family',
          imageUrl: 'meal1.jpg',
        })
        .set('Accept', 'application/json')
        .expect(201)
        .expect((response) => {
          expect(response.body)
            .to.eql({
              status: 201,
              message: 'New menu has been added',
              data: [{
                id: 5,
                menuType: 'Special',
                meal: 'Rice with beef',
                size: 'medium',
                price: 1500,
                summary: 'Rice belongs to the carbohydrate family',
                imageUrl: 'meal1.jpg',
              }],
            })
            .to.have.all.keys('status', 'message', 'data');
        })
        .end(done);
    });
  });
});

describe('Test case for Order route', () => {
  describe('api/v1/order testing for response', () => {
    it('should get all order', (done) => {
      request(app)
        .get('/api/v1/order')
        .expect(200)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.have.all.keys('status', 'data');
        })
        .expect({
          status: 200,
          data: allOrder,
        })
        .end(done);
    });
  });

  describe('posting an order', () => {
    it('should make a post for a specific order', (done) => {
      request(app)
        .post('/api/v1/order')
        .send({
          menuType: 'Special',
          meal: 'Rice with beef',
          size: 'medium',
          order: 20,
          price: 1500,
          customerEmail: 'okiki@gmail.com',
          imageUrl: 'meal1.jpg',
        })
        .set('Accept', 'application/json')
        .expect(201)
        .expect((response) => {
          expect(response.body)
            .to.eql({
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
                imageUrl: 'meal1.jpg',
              }],
            })
            .to.have.all.keys('status', 'message', 'data');
        })
        .end(done);
    });
  });

  describe('Update an order', () => {
    it('should modify a specific order', (done) => {
      request(app)
        .put('/api/v1/order/1')
        .send({
          menuType: 'Special',
          meal: 'Rice with beef',
          size: 'medium',
          order: 10,
          price: 1500,
          customerEmail: 'shade@gmail.com',
          imageUrl: 'meal1.jpg',
        })
        .set('Accept', 'application/json')
        .expect(200)
        .expect((response) => {
          expect(response.body)
            .to.eql({
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
                imageUrl: 'meal1.jpg',
              }],
            })
            .to.have.all.keys('status', 'message', 'data');
        })
        .end(done);
    });

    it('should return an error message if the order does not exist', (done) => {
      request(app)
        .put('/api/v1/order/70')
        .send({
          menuType: 'Special',
          meal: 'Rice with beef',
          size: 'medium',
          order: 10,
          price: 1500,
          customerEmail: 'shade@gmail.com',
          imageUrl: 'meal1.jpg',
        })
        .set('Accept', 'application/json')
        .expect(404)
        .expect((response) => {
          expect(response.body)
            .to.be.an('object')
            .to.eql({
              status: 404,
              error: 'Order Id not found',
            })
            .to.have.all.keys('status', 'error');
        })
        .end(done);
    });
  });
});
