/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-throw-literal */
export async function requireAuthentication(request: any, Parse: any) {
  console.log('*********************', request);

  if (!request.user) {
    throw new Parse.Error(Parse.Error.SESSION_MISSING, 'Debe estar autenticado para realizar esta operación');
  }
}

// export async function requireAuthentication(request: any, Parse: any) {
//   console.log('***************************', request);

//   const sessionToken = request.headers.authorization;
//   if (!sessionToken) {
//     throw new Parse.Error(Parse.Error.SESSION_MISSING, 'Debe estar autenticado para realizar esta operación');
//   }

//   const query = new Parse.Query(Parse.Session);
//   query.equalTo('sessionToken', sessionToken);
//   const session = await query.first({ useMasterKey: true });

//   if (!session) {
//     throw new Parse.Error(Parse.Error.SESSION_MISSING, 'Debe estar autenticado para realizar esta operación');
//   }
// }
