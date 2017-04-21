import fs from 'fs';
import path from 'path';

const dir = path.join(__dirname);

fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    if ('.js' === path.extname(file)) {
      const modelName = path.basename(file, '.js');
      if ('index' !== modelName) {
        exports[modelName] = require(path.join(dir, file)).default;
      }
    }
  });
});
