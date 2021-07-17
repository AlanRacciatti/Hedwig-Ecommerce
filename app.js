const productsRoutes = require("./src/routes/productsRoutes");
const usersRoutes = require("./src/routes/usersRouters");

const express = require('express');
const app = express();
const path = require('path');

app.use("/", productsRoutes);

app.use("/", usersRoutes);

app.use(express.static(path.join(__dirname, './public')));

app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, () => {
  console.log('Corriendo puerto 3000');
});