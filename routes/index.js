const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const Article = require("../models/article");

/* GET home page with categories list. */
router.get("/", async function (req, res, next) {
  const categories = await Category.find();
  console.log(categories);
  res.render("index", { categories });
});

/* GET articles from category */
router.get("/articles/:categoryId", async (req, res) => {
  //Вытаскиваем из строки поиска переменную, нужна ля того, чтобы отсортировать поисковую выдачу из базы данных
  const categoryId = req.params.categoryId;
  const articles = await Article.find({ categ: categoryId });
  res.render("show-articles", { articles });
});

module.exports = router;
