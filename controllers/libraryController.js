const Library = require("../models/Library");



exports.createBook = async (req, res) => {
    try {
        const book = await Library.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getBook = async (req, res) => {
    try {
        const books = await Library.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getBookById = async (req, res) => {
    try {
        const book = await Library.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Patient not found" });
        }

        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateBook = async (req, res) => {
    try {

        const book = await Library.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(book);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteBook = async (req, res) => {

    try {

        const book = await Library.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "book deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


exports.searchBook = async (req, res) => {
  try {

    const name = req.query.name;

    const books = await Library.find({
      booktitle: { $regex: name, $options: "i" }
    });

    res.status(200).json(books);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};