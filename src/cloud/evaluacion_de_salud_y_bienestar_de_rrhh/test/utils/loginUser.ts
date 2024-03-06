import { Express } from 'express-serve-static-core';
import { SuperTestStatic } from 'supertest';

export async function loginUser(request: SuperTestStatic, app: Express) {
  const loginResponse = await request(app).post('/server/login').set('X-Parse-Application-Id', '001').send({
    username: 'user200',
    password: '123456',
  });
  const { sessionToken } = loginResponse.body;
  return sessionToken;
}