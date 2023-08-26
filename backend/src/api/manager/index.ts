export default (app) => {
  app.post(
    `/tenant/:tenantId/manager`,
    require('./managerCreate').default,
  );
  app.put(
    `/tenant/:tenantId/manager/:id`,
    require('./managerUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/manager/import`,
    require('./managerImport').default,
  );
  app.delete(
    `/tenant/:tenantId/manager`,
    require('./managerDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/manager/autocomplete`,
    require('./managerAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/manager`,
    require('./managerList').default,
  );
  app.get(
    `/tenant/:tenantId/manager/:id`,
    require('./managerFind').default,
  );
};
