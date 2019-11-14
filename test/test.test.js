const request = require("supertest");

const app = require("../src/app");

describe("Teste", () => {
    it("Vai diahco", () => {
        request(app)
            .get("/")
            .expect(200);
    });
});
