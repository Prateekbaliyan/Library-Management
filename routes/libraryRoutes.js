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

router.get("/books/:id", getBookById);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

router.get("/books/search", searchBook);

module.exports = router;