console.log('Hello, World!');

const mongoose = require('mongoose');
// mongoose.model('Language', languageSchema);
const Language = require('./models/language.model.js');
const LanguageRoutes = require('./routes/language.routes.js');
const express = require('express');
const app = express();

console.log(process.env.DB_URL);
const DB_URL = process.env.DB_URL 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/languages", LanguageRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



// DB className: Node-API
mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
