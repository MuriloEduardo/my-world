import Book from '../models/Book';

class BookController {
  /**
   * List Books
   */
  async index(req, res) {
    try {
      const books = await Book.findAll({});

      return res.json(books);
    } catch (error) {
      return res.status(412).json({ error: error.message });
    }
  }
}

export default new BookController();
