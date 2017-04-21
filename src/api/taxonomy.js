import Taxonomy from '../models/taxonomy';

module.exports.getAllTaxonomies = function(req, res) {
  Taxonomy.find(function(err, taxonomies) {
    if (err) {
      res.send(err);
    }
    res.json({ data: taxonomies });
  });
};

module.exports.addTaxonomy = function(req, res) {
  var taxonomy = new Taxonomy(req.body.data);
  taxonomy.save(function(err) {
    if (err) {
      res.send(err);

    }
    res.json({ data: taxonomy });
  });
};
