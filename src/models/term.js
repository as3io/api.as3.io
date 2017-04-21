import Mongoose from 'mongoose';

export default Mongoose.model('Term', {
  name: String,
  description: String,
  key: String,
  fullName: String,
  pathedName: String,
});
