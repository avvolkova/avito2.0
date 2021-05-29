const mongoose = require("mongoose");
const Product = require("./article");
const Category = require("./category");

mongoose.connect(
  "mongodb://localhost:27017/avito",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Успешно подключились к базе")
);

async function myCategory() {
  const product = [];
  const category = [];

  // category.push(new Category({name: 'Товары для дома и дачи'}))
  // category.push(new Category({name: 'Недвижимость'}))
  // category.push(new Category({name: 'Транспорт'}))

  product.push(
    new Product({
      model: "shirt",
      type: "-",
      mileage: 1,
      price: 200,
      categ: "60b2b4f0e8388b4004e0be2f",
      photo:
        "https://cdn.skoda-storyboard.com/2020/06/OCTAVIA_SCOUT_06-1440x960.jpg",
    })
  );
  // await Category.insertMany(category)
  await Product.insertMany(product);
  await mongoose.disconnect();
}
myCategory();
