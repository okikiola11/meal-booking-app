import chai from "chai";

import request from "supertest";

import app from "../index";

import allMeals from "../utils/mealData";

const { expect } = chai;

describe("Test case for meal route", () => {
  describe("api/v1/meals testing for response", () => {
    it("should get all meals", done => {
      request(app)
        .get("/api/v1/meals")
        .expect(200)
        .expect(response => {
          expect(response.body)
            .to.be.an("object")
            .to.have.all.keys("status", "data");
        })
        .expect({ status: 200, data: allMeals })
        .end(done);
    });
  });

  describe("posting a meal", () => {
    it("should make a post for a specific meal", done => {
      request(app)
        .post("/api/v1/meals")
        .send({
          name: "Rice with beef",
          size: "medium",
          price: "1500",
          summary: "Rice belongs to the carbohydrate family",
          imageUrl: "meal1.jpg"
        })
        .set("Accept", "application/json")
        .expect(201)
        .expect(response => {
          expect(response.body)
            .to.eql({
              status: 201,
              message: "New meal has been added",
              data: [
                {
                  id: 5,
                  name: "Rice with beef",
                  size: "medium",
                  price: "1500",
                  summary: "Rice belongs to the carbohydrate family",
                  imageUrl: "meal1.jpg"
                }
              ]
            })
            .to.have.all.keys("status", "message", "data");
        })
        .end(done);
    });
  });
});
