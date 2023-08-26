export default (app) => {
  app.post(
    `/tenant/:tenantId/trade`,
    require('./tradeCreate').default,
  );
  app.put(
    `/tenant/:tenantId/trade/:id`,
    require('./tradeUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/trade/import`,
    require('./tradeImport').default,
  );
  app.delete(
    `/tenant/:tenantId/trade`,
    require('./tradeDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/trade/autocomplete`,
    require('./tradeAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/trade`,
    require('./tradeList').default,
  );
  app.get(
    `/tenant/:tenantId/trade/:id`,
    require('./tradeFind').default,
  );
};