/* eslint-disable no-console */

import Parse from 'parse/node';
export async function assignRoleToUser(user: Parse.User, roleName: string) {
  const query = new Parse.Query(Parse.Role);
  query.equalTo('name', roleName);
  const role = await query.first();

  if (!role) {
    throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Role ${roleName} not found.`);
  }

  const relation = role.relation('users');
  //Agregar el usuario a la relacion
  relation.add(user);
  await role.save(null, { useMasterKey: true });
}
