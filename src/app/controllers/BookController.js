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

  /**
   * Show Book
   */
  async show(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);

      return res.json(book);
    } catch (error) {
      return res.status(412).json({ error: error.message });
    }
  }

  /**
   * Create Book
   */
  async store(req, res) {
    const { id, name } = req.body;

    try {
      const book = await Book.create({ id, name });

      return res.json(book);
    } catch (error) {
      return res.status(412).json({ error: error.message });
    }
  }

  /**
   * Update Book
   */
  async update(req, res) {
    try {
      const book = await Book.update(
        { name: req.body.name },
        {
          where: { id: req.params.id },
        }
      );

      return res.json(book);
    } catch (error) {
      return res.status(412).json({ error: error.message });
    }
  }

  /**
   * Destroy Book
   */
  async destroy(req, res) {
    try {
      await Book.destroy({
        where: { id: req.params.id },
      });

      return res.sendStatus(204);
    } catch (error) {
      return res.status(412).json({ error: error.message });
    }
  }
}

export default new BookController();
