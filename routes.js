const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");

router.get("/", homeController.getHome);
router.get("/book-list", bookController.getBookList);
router.post("/delete", bookController.deleteBook)
router.get("/books", bookController.getBook);
router.post("/books", bookController.postBook);
router.get("/update", bookController.getUpdateBook)
router.post("/updates", bookController.postUpdateBook)
router.get("/helloWorld", (req, res)=>{
    res.render("helloWorld")
})
module.exports = router;
