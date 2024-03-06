/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
declare const Parse: any;

import './evaluacion_de_salud_y_bienestar_de_rrhh/routes/index';
import '../masterClouds/routes/index';
import { requestMessage } from '../auth/authService';

Parse.Cloud.define('requestMessage', async ({ params }: any) => {
  const { address, chain, networkType } = params;

  const message = await requestMessage({
    address,
    chain,
    networkType,
  });
  return { message };
});

/* The code `Parse.Cloud.define('getPluginSpecs', () => { ... })` is defining a cloud function named
`getPluginSpecs` in the Parse server. This function is not implemented and only exists to remove
client-side errors when using the moralis-v1 package. It returns an empty array `[]`. */
Parse.Cloud.define('getPluginSpecs', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return [];
});

/* The code `Parse.Cloud.define('getServerTime', () => { ... })` is defining a cloud function named
`getServerTime` in the Parse server. However, this function is not implemented and only exists to
remove client-side errors when using the moralis-v1 package. It returns `null`, indicating that it
does not perform any specific functionality. */
Parse.Cloud.define('getServerTime', () => {
  // Not implemented, only excists to remove client-side errors when using the moralis-v1 package
  return null;
});

export default Parse;
