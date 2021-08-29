const productsRoutes = require("./src/routes/productsRoutes");
const usersRoutes = require("./src/routes/usersRouters");
const mainRoutes = require("./src/routes/mainRoutes");

const express = require('express');
const app = express();
const path = require('path');
const session = require("express-session");

const methodOverride =  require('method-override');
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(methodOverride("_method"));
app.use(session({ secret:"Secreto loco jiju" }))


app.use("/products", productsRoutes);

app.use("/users", usersRoutes);

app.use("/", mainRoutes);

app.use(express.static(path.join(__dirname, './public')));

app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, () => {
  console.log('Corriendo puerto 3000');
});

app.use((req, res, next) => {
  res.status(404).render('error', {data: {session: req.session}})
})