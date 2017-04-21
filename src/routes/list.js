export default (Router) => {
  Router.route('/:connection/:namespace/:model')
    .get((req, res) => {
      res.json({ data: {
        method: 'GET',
        connection: req.params.connection,
        namespace: req.params.namespace,
        model: req.params.model,
        id: req.params.id,
      } });
    })
  ;
};
