/* eslint-disable etc/no-commented-out-code */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express from 'express';
// @ts-ignore
import ParseServer from 'parse-server';
import Moralis from 'moralis';
import config from './config';
// @ts-ignore
import { streamsSync } from '@moralisweb3/parse-server';
import http from 'http';
// @ts-ignore
import { parseServer } from './parseServer';
import { parseDashboard } from './parseDashboard';
// @ts-ignore
import { parseUpdate } from './utils/parseUpdate';
// @ts-ignore
import { parseEventData } from './utils/parseEventData';
// @ts-ignore
import { schemasevaluacion_de_salud_y_bienestar_de_rrhh } from './utils/schemas/evaluacion_salud_y_bienestar_de_rrhh/index';
const port = config.HTTP_PORT;

import helmet from 'helmet';
import HELMET_CONFIG from './utils/helmet.config';
const Web3 = require('web3');

const whitelist = ['http://www.servertest.com', 'http://servertest-front-prod-40jlpbzl6-servertest.vercel.app'];

const corsOptions = {
  origin(origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export const app = express();

const moralisApiKey = config.DEVELOPMENT_MODE === 'prod' ? config.MORALIS_API_KEY_PROD : config.MORALIS_API_KEY_DEV;

const moralisApiKeyStreams =
  config.DEVELOPMENT_MODE === 'prod' ? config.MORALIS_API_KEY_STREAMS_PROD : config.MORALIS_API_KEY_STREAMS_DEV;

config.DEVELOPMENT_MODE === 'prod' ? console.log('prod') : console.log('dev');

Moralis.start({
  apiKey: moralisApiKey,
});

app.use(helmet(HELMET_CONFIG));

app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(self "http://http//localhost:2337/")');
  next();
});

const verifySignature = (req: any, secret: string) => {
  const providedSignature = req.headers['x-signature'];
  if (!providedSignature) {
    throw new Error('Signature not provided');
  }
  const generatedSignature = Web3.utils.sha3(JSON.stringify(req.body) + secret);
  if (generatedSignature !== providedSignature) {
    throw new Error('Invalid Signature');
  }
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

app.use(cors());

app.use(
  streamsSync(parseServer, {
    apiKey: moralisApiKeyStreams,
    webhookUrl: config.STREAMS_WEBHOOK_URL,
  }),
);

app.use(`/server`, parseServer.app);
app.use(`/dashboard`, parseDashboard);
app.use(express.static('public'));

app.post(`/streams`, async (req: any, res: any) => {
  try {
    verifySignature(req, moralisApiKey);
    const { data, _tagName, eventName }: any = parseEventData(req);
    await parseUpdate(`SFS_${eventName}`, data);
    res.send('ok');
    return res.status(200).json();
  } catch (error) {
    return error;
  }
});

app.get('/schema', (req, res) => {
  try {
    schemasevaluacion_de_salud_y_bienestar_de_rrhh();

    res.send('ok');
  } catch (error) {
    res.send(error);
  }
});

export const httpServer = http.createServer(app);
httpServer.listen(port, async () => {
  if (config.USE_STREAMS) {
    // eslint-disable-next-line no-console

    return config.STREAMS_WEBHOOK_URL;
  }
  // eslint-disable-next-line no-console
  return port;
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
