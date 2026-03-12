const express = require("express");
const router = express.Router();

const {
    createBook,
    getBook,
    getBookById,
    updateBook,
    deleteBook,
    searchBook
} = require("../controllers/libraryController");

router.post("/books", createBook);

router.get("/books", getBook);

router.get("/books/search", searchBook);

router.get("/books/:id", getBookById);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

module.exports = router;