import Mongoose from 'mongoose';

export default Mongoose.model('Taxonomy', {
  name: String,
  description: String,
  key: String,
});
