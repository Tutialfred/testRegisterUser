/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Evaluation tests', () => {
  let sessionToken: string;
  let createEvaluationResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createEvaluationResponse = await request(app)
      .post('/server/functions/createEvaluation')
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

  describe('Create Evaluation', () => {
    it('The response status is "success"', async () => {
      expect(createEvaluationResponse.body.result.status).toBe('success');
    });

    it('The request should bring an Evaluation object', async () => {
      expect(createEvaluationResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(createEvaluationResponse.body.result.result).toBe(true);
    });
  });

  describe('Update Evaluation', () => {
    let updateEvaluationResponse: any;
    beforeAll(async () => {
      updateEvaluationResponse = await request(app)
        .post('/server/functions/updateEvaluation')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({

            "objectData":{
                "eva_date": "2 eva_date",
                 "eva_specialist": "2 eva_specialist",
                 "eva_result": "2 eva_result",
                 "eva_comments": "2 eva_comments"
               },
               
               "objectId": createEvaluationResponse.body.result.data.objectId
           });
    });

    it('The response status is "success"', async () => {
      expect(updateEvaluationResponse.body.result.status).toBe('success');
    });

    it('The response should contain an Evaluation object', async () => {
      expect(updateEvaluationResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(updateEvaluationResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllEvaluation', () => {
    let getAllEvaluationResponse: any;
    beforeAll(async () => {
      getAllEvaluationResponse = await request(app)
        .post('/server/functions/getAllEvaluation')
        .set('X-Parse-Application-Id', '001')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllEvaluationResponse.body.result.status).toBe('success');
    });

    it('should return an array of Evaluation', async () => {
      expect(getAllEvaluationResponse.body.result).toHaveProperty('data');
    });

    it('the response from getAllEvaluation should contain an array of Evaluation', async () => {
      expect(Array.isArray(getAllEvaluationResponse.body.result.data)).toBe(true);
    });
  });

  describe('getEvaluationById', () => {
    let getEvaluationResponse: any;
    beforeAll(async () => {
      getEvaluationResponse = await request(app)
        .post('/server/functions/getEvaluationById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          objectId: createEvaluationResponse.body.result.data.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getEvaluationResponse.body.result.status).toBe('success');
    });

    it('should return an Evaluation object', async () => {
      expect(getEvaluationResponse.body.result).toHaveProperty('data');
    });

    it('the response contains an Evaluation object', async () => {
      expect(getEvaluationResponse.body.result.data).toBeInstanceOf(Object);
    });
  });

  describe('Delete Evaluation', () => {
    let deleteEvaluationResponse: any;
    beforeAll(async () => {
      deleteEvaluationResponse = await request(app)
        .post('/server/functions/deleteEvaluation')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          objectId: createEvaluationResponse.body.result.data.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteEvaluationResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteEvaluationResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});