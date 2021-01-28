export const checkSavedData = (expirationKey, saveKey) => {
  const saved = sessionStorage.getItem(expirationKey);
  if (saved) {
    const { expiresAt } = JSON.parse(saved);

    if (Date.parse(new Date()) > Date.parse(expiresAt)) {
      sessionStorage.clear();
    }
  }

  const savedItems = sessionStorage.getItem(saveKey);

  if (savedItems) {
    const items = JSON.parse(savedItems);

    return items;
  }
};

export const saveData = (items, saveKey, expirationKey) => {
  sessionStorage.setItem(
    expirationKey,
    JSON.stringify({
      expiresAt: new Date(new Date().getTime() + 5 * 1 * 10e3),
    })
  );

  sessionStorage.setItem(saveKey, JSON.stringify(items));
};
