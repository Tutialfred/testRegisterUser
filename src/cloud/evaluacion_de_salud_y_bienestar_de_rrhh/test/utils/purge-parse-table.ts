export async function cleanDataBase(Parse: typeof globalThis.Parse, tablename: string, objectId: string) {
  let tableQuery;
  if (tablename === 'User') {
    tableQuery = new Parse.Query(Parse.User);
  } else {
    tableQuery = new Parse.Query(tablename);
  }

  // Busca el objeto por su ID
  tableQuery.equalTo('objectId', objectId);

  const item = await tableQuery.first({ useMasterKey: true });
  if (item) {
    // Si el objeto existe, lo elimina
    await item.destroy({ useMasterKey: true });
  }
}
