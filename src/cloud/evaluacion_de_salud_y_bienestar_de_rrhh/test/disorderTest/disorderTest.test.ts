/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Disorder tests', () => {
  let sessionToken: string;
  let createDisorderResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createDisorderResponse = await request(app)
      .post('/server/functions/createDisorder')
      .set('X-Parse-Application-Id', '001')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        "objectData":{
           "dis_name": "This 2 dis_name",
            "dis_description": "dis_description"
          }
      });
  });

  describe('Create Disorder', () => {
    it('The response status is "success"', async () => {
      expect(createDisorderResponse.body.result.status).toBe('success');
    });

    it('The request should bring an Disorder object', async () => {
      expect(createDisorderResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(createDisorderResponse.body.result.result).toBe(true);
    });
  });

  describe('Update Disorder', () => {
    let updateDisorderResponse: any;
    beforeAll(async () => {
      updateDisorderResponse = await request(app)
        .post('/server/functions/updateDisorder')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({

            "objectData":{
                "dis_name": "1 dis_name",
                 "dis_description": "1 dis_description"
               },
               
               "objectId":createDisorderResponse.body.result.data.objectId
           });
    });

    it('The response status is "success"', async () => {
      expect(updateDisorderResponse.body.result.status).toBe('success');
    });

    it('The response should contain an Disorder object', async () => {
      expect(updateDisorderResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(updateDisorderResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllDisorder', () => {
    let getAllDisorderResponse: any;
    beforeAll(async () => {
      getAllDisorderResponse = await request(app)
        .post('/server/functions/getAllDisorder')
        .set('X-Parse-Application-Id', '001')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllDisorderResponse.body.result.status).toBe('success');
    });

    it('should return an array of Disorder', async () => {
      expect(getAllDisorderResponse.body.result).toHaveProperty('data');
    });

    it('the response from getAllDisorder should contain an array of Disorder', async () => {
      expect(Array.isArray(getAllDisorderResponse.body.result.data)).toBe(true);
    });
  });

  describe('getDisorderById', () => {
    let getDisorderResponse: any;
    beforeAll(async () => {
      getDisorderResponse = await request(app)
        .post('/server/functions/getDisorderById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          objectId: createDisorderResponse.body.result.data.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getDisorderResponse.body.result.status).toBe('success');
    });

    it('should return an Disorder object', async () => {
      expect(getDisorderResponse.body.result).toHaveProperty('data');
    });

    it('the response contains an Disorder object', async () => {
      expect(getDisorderResponse.body.result.data).toBeInstanceOf(Object);
    });
  });

  describe('Delete Disorder', () => {
    let deleteDisorderResponse: any;
    beforeAll(async () => {
      deleteDisorderResponse = await request(app)
        .post('/server/functions/deleteDisorder')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          objectId: createDisorderResponse.body.result.data.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteDisorderResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteDisorderResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});