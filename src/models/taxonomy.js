import Mongoose from 'mongoose';

export default Mongoose.model('taxonomy', new Mongoose.Schema({
  name: String,
  description: { type: String, default: null },
  key: String,
  createdDate: Date,
  deleted: { type: Boolean, default: false },
}));
