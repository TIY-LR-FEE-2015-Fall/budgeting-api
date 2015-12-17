var Mystique = require('mystique');

var BudgetTransformer = Mystique.Transformer.extend({
  resourceName: 'budget',
  mapOut: function(budget) {
    return {
      id: budget.id,
      name: budget.name,
      startDate: budget.startDate,
      remaining: budget.remaining,
    };
  },

  mapIn(req) {
    return {
      name: req.body.budget.name,
      startDate: req.body.budget.startDate,
      remaining: req.body.budget.remaining,
    };
  },
});

Mystique.registerTransformer('Budget', BudgetTransformer);
