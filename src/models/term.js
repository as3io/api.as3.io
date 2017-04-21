import Mongoose from 'mongoose';

export default Mongoose.model('term', new Mongoose.Schema({
  name: String,
  description: String,
  key: String,
  fullName: String,
  pathedName: String,
}));
