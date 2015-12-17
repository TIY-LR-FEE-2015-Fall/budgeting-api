var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var BudgetSchema = new Schema({
  name: {type: String, required: true},
  startDate: {type: Date, required: true},
  remaining: {type: String, required: true},
});

module.exports = Mongoose.model('Budget', BudgetSchema);
