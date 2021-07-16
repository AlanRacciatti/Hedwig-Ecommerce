const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.listen(process.env.PORT || 3000, () => {
  console.log('Corriendo puerto 3000');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/products/index.ejs'));
});
