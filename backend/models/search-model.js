const { Schema, model } = require("mongoose");

const searchSchema = new Schema({
  fullName: String,
  email: String,
  speciality: String,
  teamName: String,
  dish:Array,
//   posted_at: Date,
//   deadline: Date,
});
searchSchema.index({ title: 'speciality' });
const Search = model('Search', searchSchema);

module.exports = Search; 