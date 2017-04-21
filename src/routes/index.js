import list from './list';
import model from './model';
import relationships from './relationships';

export default (Router) => {
  list(Router);
  model(Router);
  relationships(Router);
};
