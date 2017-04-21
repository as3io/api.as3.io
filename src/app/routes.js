import Mongoose from 'mongoose';
import taxonomies from '../api/taxonomy';

export default Router => {
  Router.route('/taxonomies').post((req, res) => {
    taxonomies.addTaxonomy(req, res);
  }).get((req, res) => {
    taxonomies.getAllTaxonomies(req, res);
  });
}
