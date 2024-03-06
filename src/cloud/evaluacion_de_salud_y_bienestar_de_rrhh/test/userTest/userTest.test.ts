/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('User tests', () => {
  let sessionToken: string;
  let createUserResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createUserResponse = await request(app)
      .post('/server/functions/createUser')
      .set('X-Parse-Application-Id', '001')
      .send({
        objectData: {
          username: 'usertest20test125678',
          password: 'password123',
          email: 'usertest20test125678@example.com',
        },
      });
  });

  describe('Create User', () => {
    it('The response status is "success"', async () => {
      expect(createUserResponse.body.result.status).toBe('success');
    });

    it('The request should bring a user object', async () => {
      expect(createUserResponse.body.result).toHaveProperty('user');
    });

    it('The response contains a result object', async () => {
      expect(createUserResponse.body.result.result).toBe(true);
    });

    it('The response contains a sessionToken', async () => {
      expect(createUserResponse.body.result.user).toHaveProperty('sessionToken');
    });
  });

  describe('Update User', () => {
    let updateUserResponse: any;
    beforeAll(async () => {
      updateUserResponse = await request(app)
        .post('/server/functions/updateUser')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          userId: createUserResponse.body.result.user.objectId,
          objectData: {
            user_interests: [
              {
                category: 'Basquet',
              },
            ],
          },
        });
    });

    it('The response status is "success"', async () => {
      expect(updateUserResponse.body.result.status).toBe('success');
    });

    it('The response should contain a user object', async () => {
      expect(updateUserResponse.body.result).toHaveProperty('user');
    });

    it('The response contains a result object', async () => {
      expect(updateUserResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllUsers', () => {
    let getAllUsersResponse: any;
    beforeAll(async () => {
      getAllUsersResponse = await request(app)
        .post('/server/functions/getAllUsers')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllUsersResponse.body.result.status).toBe('success');
    });

    it('should return an array of users', async () => {
      expect(getAllUsersResponse.body.result).toHaveProperty('users');
    });

    it('the response from getAllUsers should contain an array of users', async () => {
      expect(Array.isArray(getAllUsersResponse.body.result.users)).toBe(true);
    });
  });

  describe('getUserById', () => {
    let getUserResponse: any;
    beforeAll(async () => {
      getUserResponse = await request(app)
        .post('/server/functions/getUserById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          userId: createUserResponse.body.result.user.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getUserResponse.body.result.status).toBe('success');
    });

    it('should return a user object', async () => {
      expect(getUserResponse.body.result).toHaveProperty('user');
    });

    it('the response contains a user object', async () => {
      expect(getUserResponse.body.result.user).toBeInstanceOf(Object);
    });
  });

  describe('Delete user', () => {
    let deleteUserResponse: any;
    beforeAll(async () => {
      deleteUserResponse = await request(app)
        .post('/server/functions/deleteUser')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          userId: createUserResponse.body.result.user.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteUserResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteUserResponse.body.result.result).toBe(true);
    });
  });
  afterAll(() => {
    httpServer.close();
  });
});