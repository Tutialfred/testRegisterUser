/* eslint-disable @typescript-eslint/no-explicit-any */
import Web3 from 'web3';

export const verifySignature = (req: any, secret: any) => {
  const providedSignature = req.headers['x-signature'];
  if (!providedSignature) {
    throw new Error('Signature not provided');
  }
  const generatedSignature = Web3.utils.sha3(JSON.stringify(req.body) + secret);
  if (generatedSignature !== providedSignature) {
    throw new Error('Invalid Signature');
  }
};