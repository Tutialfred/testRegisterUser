/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('History tests', () => {
  let sessionToken: string;
  let createHistoryResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createHistoryResponse = await request(app)
      .post('/server/functions/createHistory')
      .set('X-Parse-Application-Id', '001')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        "objectData":{
           "eva_date": "1 eva_date",
            "eva_specialist": "1 eva_specialist",
            "eva_result": "1 eva_result",
            "eva_comments": "1 eva_comments"
          }
      });
  });

  describe('Create History', () => {
    it('The response status is "success"', async () => {
      expect(createHistoryResponse.body.result.status).toBe('success');
    });

    it('The request should bring an History object', async () => {
      expect(createHistoryResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(createHistoryResponse.body.result.result).toBe(true);
    });
  });

  describe('Update History', () => {
    let updateHistoryResponse: any;
    beforeAll(async () => {
      updateHistoryResponse = await request(app)
        .post('/server/functions/updateHistory')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({

            "objectData":{
                "eva_date": "2 eva_date",
                 "eva_specialist": "2 eva_specialist",
                 "eva_result": "2 eva_result",
                 "eva_comments": "2 eva_comments"
               },
               
               "objectId": createHistoryResponse.body.result.data.objectId
           });
    });

    it('The response status is "success"', async () => {
      expect(updateHistoryResponse.body.result.status).toBe('success');
    });

    it('The response should contain an History object', async () => {
      expect(updateHistoryResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(updateHistoryResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllHistory', () => {
    let getAllHistoryResponse: any;
    beforeAll(async () => {
      getAllHistoryResponse = await request(app)
        .post('/server/functions/getAllHistory')
        .set('X-Parse-Application-Id', '001')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllHistoryResponse.body.result.status).toBe('success');
    });

    it('should return an array of History', async () => {
      expect(getAllHistoryResponse.body.result).toHaveProperty('data');
    });

    it('the response from getAllHistory should contain an array of History', async () => {
      expect(Array.isArray(getAllHistoryResponse.body.result.data)).toBe(true);
    });
  });

  describe('getHistoryById', () => {
    let getHistoryResponse: any;
    beforeAll(async () => {
      getHistoryResponse = await request(app)
        .post('/server/functions/getHistoryById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          objectId: createHistoryResponse.body.result.data.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getHistoryResponse.body.result.status).toBe('success');
    });

    it('should return an History object', async () => {
      expect(getHistoryResponse.body.result).toHaveProperty('data');
    });

    it('the response contains an History object', async () => {
      expect(getHistoryResponse.body.result.data).toBeInstanceOf(Object);
    });
  });

  describe('Delete History', () => {
    let deleteHistoryResponse: any;
    beforeAll(async () => {
      deleteHistoryResponse = await request(app)
        .post('/server/functions/deleteHistory')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          objectId: createHistoryResponse.body.result.data.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteHistoryResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteHistoryResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});