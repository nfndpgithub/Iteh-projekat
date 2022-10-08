const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.b2habvp.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
