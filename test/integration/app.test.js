import supertest from 'supertest';
import chai from 'chai';

import app from '../../src/app';
import truncate from '../util/truncate';
import Book from '../../src/app/models/Book';

const request = supertest(app);
const expect = chai.expect;

const defaultBook = {
  id: 1,
  name: 'Default Book',
};

describe('Routes Books', () => {
  beforeEach(async () => {
    await truncate();

    await Book.create(defaultBook);
  });

  describe('Route GET /books', () => {
    it('should return list of book', done => {
      request.get('/books').end((err, res) => {
        expect(res.body[0].id).to.be.equal(defaultBook.id);
        expect(res.body[0].name).to.be.equal(defaultBook.name);

        done();
      });
    });
  });
});
