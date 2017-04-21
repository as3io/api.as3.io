import fs from 'fs';
import path from 'path';

const dir = path.join(__dirname, '../models');
const models = [];

fs.readdir(dir, (err, files) => {
  files.forEach((file) => {
    if (path.extname(file) === '.js') {
      // const modelName = path.basename(file, '.js');
      // const schema = require(path.join(dir, file)).default;
    }
  });
});

export default models;
