import mongoose from 'mongoose';

export default (Router) => {
  Router.route('/:connection/:namespace/:model/:id')
    .get((req, res) => {
      // Will throw global error is the model type has not been registered.
      const Model = mongoose.model(req.params.model); // db.model(req.params.model);

      Model.findById(req.params.id)
        .then((model) => {
          // Errors may include a non object id cast
          // If the ID is not found, model will by null
          res.json({ data: model });
        })
        .catch((err) => {
          res.json({ error: err });
        })
      ;
    })
    .post((req, res) => {
      res.json({ data: {
        method: 'POST',
        connection: req.params.connection,
        namespace: req.params.namespace,
        model: req.params.model,
        id: req.params.id,
      } });
    })
    .patch((req, res) => {
      res.json({ data: {
        method: 'PATCH',
        connection: req.params.connection,
        namespace: req.params.namespace,
        model: req.params.model,
        id: req.params.id,
      } });
    })
    .delete((req, res) => {
      res.json({ data: {
        method: 'DELETE',
        connection: req.params.connection,
        namespace: req.params.namespace,
        model: req.params.model,
        id: req.params.id,
      } });
    })
  ;
};
