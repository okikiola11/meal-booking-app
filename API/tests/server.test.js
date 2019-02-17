import chai from "chai";

import request from "supertest";

import app from "../index";

import allMenu from "../utils/menuData";

const { expect } = chai;

describe("Test case for menu route", () => {
  describe("api/v1/menu testing for response", () => {
    it("should get all menu", done => {
      request(app)
        .get("/api/v1/menu")
        .expect(200)
        .expect(response => {
          expect(response.body)
            .to.be.an("object")
            .to.have.all.keys("status", "data");
        })
        .expect({ status: 200, data: allMenu })
        .end(done);
    });
  });
});
