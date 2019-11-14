import supertest from "supertest";
import chai from "chai";
import app from "../../src/app";

const request = supertest(app);
const expect = chai.expect;

const defaultBook = {
    id: 1,
    name: "Default Book"
};

describe("Routes Books", () => {
    describe("Route GET /books", () => {
        it("should return list of book", done => {
            request.get("/books").end((err, res) => {
                expect(res.body[0].id).to.be.equal(defaultBook.id);
                expect(res.body[0].name).to.be.equal(defaultBook.name);

                done();
            });
        });
    });
});
