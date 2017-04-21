import Express from 'express';
import BodyParser from 'body-parser';
import Mongoose from 'mongoose';
import routes from './app/routes';


const app  = Express();
const port = process.env.PORT || 3000;

Mongoose.connect('mongodb://localhost/node-api');

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());


//Routes API
const Router = Express.Router();
app.use('/api', Router);
routes(Router);

app.listen(port);

process.stdout.write('Listening on port ' + port);

export default app;
