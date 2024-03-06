/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Report tests', () => {
  let sessionToken: string;
  let createReportResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createReportResponse = await request(app)
      .post('/server/functions/createReport')
      .set('X-Parse-Application-Id', '001')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        "objectData":{
           "rep_details": "1 sub_code_bdns",
            "rep_recommendations": "1 sub_administrative_entities"
          }
      });
  });

  describe('Create Report', () => {
    it('The response status is "success"', async () => {
      expect(createReportResponse.body.result.status).toBe('success');
    });

    it('The request should bring an Report object', async () => {
      expect(createReportResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(createReportResponse.body.result.result).toBe(true);
    });
  });

  describe('Update Report', () => {
    let updateReportResponse: any;
    beforeAll(async () => {
      updateReportResponse = await request(app)
        .post('/server/functions/updateReport')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({

            "objectData":{
                  "rep_details": "33333333332sub_code_bdns",
                  "rep_recommendations": "3333333332sub_administrative_entities"
                },
                
                "objectId": createReportResponse.body.result.data.objectId
            });
    });

    it('The response status is "success"', async () => {
      expect(updateReportResponse.body.result.status).toBe('success');
    });

    it('The response should contain an Report object', async () => {
      expect(updateReportResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(updateReportResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllReport', () => {
    let getAllReportResponse: any;
    beforeAll(async () => {
      getAllReportResponse = await request(app)
        .post('/server/functions/getAllReport')
        .set('X-Parse-Application-Id', '001')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllReportResponse.body.result.status).toBe('success');
    });

    it('should return an array of Report', async () => {
      expect(getAllReportResponse.body.result).toHaveProperty('data');
    });

    it('the response from getAllReport should contain an array of Report', async () => {
      expect(Array.isArray(getAllReportResponse.body.result.data)).toBe(true);
    });
  });

  describe('getReportById', () => {
    let getReportResponse: any;
    beforeAll(async () => {
      getReportResponse = await request(app)
        .post('/server/functions/getReportById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          objectId: createReportResponse.body.result.data.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getReportResponse.body.result.status).toBe('success');
    });

    it('should return an Report object', async () => {
      expect(getReportResponse.body.result).toHaveProperty('data');
    });

    it('the response contains an Report object', async () => {
      expect(getReportResponse.body.result.data).toBeInstanceOf(Object);
    });
  });

  describe('Delete Report', () => {
    let deleteReportResponse: any;
    beforeAll(async () => {
      deleteReportResponse = await request(app)
        .post('/server/functions/deleteReport')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          objectId: createReportResponse.body.result.data.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteReportResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteReportResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});