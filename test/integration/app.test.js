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

  /**
   * INDEX
   */
  describe('Route GET /books', () => {
    it('should be return list of book', done => {
      request.get('/books').end((err, res) => {
        expect(res.body[0].id).to.be.eql(defaultBook.id);
        expect(res.body[0].name).to.be.eql(defaultBook.name);

        done();
      });
    });
  });

  /**
   * SHOW
   */
  describe('Route GET /books/{id}', () => {
    it('should be return a book', done => {
      request.get('/books/1').end((err, res) => {
        expect(res.body.id).to.be.eql(defaultBook.id);
        expect(res.body.name).to.be.eql(defaultBook.name);

        done();
      });
    });
  });

  /**
   * STORE
   */
  describe('Route POST /books', () => {
    it('should be create a book', done => {
      const newBook = { id: 2, name: 'New Book' };

      request
        .post('/books')
        .send(newBook)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newBook.id);
          expect(res.body.name).to.be.eql(newBook.name);

          done();
        });
    });
  });

  /**
   * UPDATE
   */
  describe('Route PUT /books/{id}', () => {
    it('should be update a book', done => {
      const updatedBook = { name: 'Updated Book' };

      request
        .put('/books/1')
        .send(updatedBook)
        .end((err, res) => {
          expect(res.body).to.be.eql([1]);

          done();
        });
    });
  });

  /**
   * DESTROY
   */
  describe('Route DELETE /books/{id}', () => {
    it('should be delete a book', done => {
      request.delete('/books/1').end((err, res) => {
        expect(res.status).to.be.eql(204);

        done();
      });
    });
  });
});
