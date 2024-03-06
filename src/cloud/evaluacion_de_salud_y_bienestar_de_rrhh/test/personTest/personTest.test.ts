/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Person tests', () => {
  let sessionToken: string;
  let createPersonResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createPersonResponse = await request(app)
      .post('/server/functions/createPerson')
      .set('X-Parse-Application-Id', '001')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        objectData: {
          per_user_id: 'jsFETsxuoU',
          per_interests: 'bandeja paisa',
        },
      });
  });

  describe('Create Person', () => {
    it('The response status is "success"', async () => {
      expect(createPersonResponse.body.result.status).toBe('success');
    });

    it('The request should bring a person object', async () => {
      expect(createPersonResponse.body.result).toHaveProperty('person');
    });

    it('The response contains a result object', async () => {
      expect(createPersonResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllPeople', () => {
    let getAllPeopleResponse: any;
    beforeAll(async () => {
      getAllPeopleResponse = await request(app)
        .post('/server/functions/getAllPeople')
        .set('X-Parse-Application-Id', '001')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllPeopleResponse.body.result.status).toBe('success');
    });

    it('should return an array of people', async () => {
      expect(getAllPeopleResponse.body.result).toHaveProperty('persons');
    });

    it('the response from getAllPeople should contain an array of people', async () => {
      expect(Array.isArray(getAllPeopleResponse.body.result.persons)).toBe(true);
    });
  });

  describe('getPersonById', () => {
    let getPersonResponse: any;
    beforeAll(async () => {
      getPersonResponse = await request(app)
        .post('/server/functions/getPersonById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          personId: createPersonResponse.body.result.person.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getPersonResponse.body.result.status).toBe('success');
    });

    it('should return a person object', async () => {
      expect(getPersonResponse.body.result).toHaveProperty('person');
    });

    it('the response contains a person object', async () => {
      expect(getPersonResponse.body.result.person).toBeInstanceOf(Object);
    });
  });

  describe('Delete person', () => {
    let deletePersonResponse: any;
    beforeAll(async () => {
      deletePersonResponse = await request(app)
        .post('/server/functions/deletePerson')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          personId: createPersonResponse.body.result.person.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deletePersonResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deletePersonResponse.body.result.result).toBe(true);
    });
  });
  afterAll(() => {
    httpServer.close();
  });
});