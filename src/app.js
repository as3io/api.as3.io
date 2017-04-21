import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as models from './models';
import routes from './routes';

const version = '1.0';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/node-api');
mongoose.Promise = global.Promise;

// Eventually will need for handling different connections.
// const db = mongoose.createConnection('mongodb://localhost/node-api');
// const Modal = db.model('taxonomy');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
- TO DOs:
- Config files for different connections and evironments, etc.
- Global JSON response error handling
- Determine model folder structure
- Write JS file to import all models via Gulp
*/
const Router = express.Router();
routes(Router);
app.use(`/api/${version}`, Router);

app.listen(port);

process.stdout.write(`Listening on port ${port}`);

export default app;
