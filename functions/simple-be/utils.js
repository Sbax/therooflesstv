const toKebabCase = (string) =>
  string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

const addRoute = function (router, name, callback) {
  return router.get(name, async (_, res) => {
    const items = await callback();

    if (items.error) {
      res.status(500);
      res.json({ error: items.error });

      return;
    }

    res.json(items);
  });
};

module.exports = {
  toKebabCase,
  addRoute,
};
