var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactUs = new Schema(
  {
    name: {type: String, required: true, max: 100},
    Email: {type: String, required: true, max: 100},
    Contact: {type: String, required: true, max: 100},
  }
);

//Export model
module.exports = mongoose.model('ContactUs', ContactUs);