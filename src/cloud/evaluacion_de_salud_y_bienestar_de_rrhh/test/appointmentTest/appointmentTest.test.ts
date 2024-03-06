/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Appointment tests', () => {
  let sessionToken: string;
  let createAppointmentResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createAppointmentResponse = await request(app)
      .post('/server/functions/createAppointment')
      .set('X-Parse-Application-Id', '001')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        "objectData":{
           "app_datatime": "2 app_datatime",
            "app_specialist": "2 app_specialist"
          }
      });
  });

  describe('Create Appointment', () => {
    it('The response status is "success"', async () => {
      expect(createAppointmentResponse.body.result.status).toBe('success');
    });

    it('The request should bring an Appointment object', async () => {
      expect(createAppointmentResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(createAppointmentResponse.body.result.result).toBe(true);
    });
  });

  describe('Update Appointment', () => {
    let updateAppointmentResponse: any;
    beforeAll(async () => {
      updateAppointmentResponse = await request(app)
        .post('/server/functions/updateAppointment')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({

            "objectData":{
                 "app_datatime": "2 app_datatime",
                  "app_specialist": "2 app_specialist"
                },
                
                "objectId": createAppointmentResponse.body.result.data.objectId
            });
    });

    it('The response status is "success"', async () => {
      expect(updateAppointmentResponse.body.result.status).toBe('success');
    });

    it('The response should contain an Appointment object', async () => {
      expect(updateAppointmentResponse.body.result).toHaveProperty('data');
    });

    it('The response contains a result object', async () => {
      expect(updateAppointmentResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllAppointment', () => {
    let getAllAppointmentResponse: any;
    beforeAll(async () => {
      getAllAppointmentResponse = await request(app)
        .post('/server/functions/getAllAppointment')
        .set('X-Parse-Application-Id', '001')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllAppointmentResponse.body.result.status).toBe('success');
    });

    it('should return an array of Appointment', async () => {
      expect(getAllAppointmentResponse.body.result).toHaveProperty('data');
    });

    it('the response from getAllAppointment should contain an array of Appointment', async () => {
      expect(Array.isArray(getAllAppointmentResponse.body.result.data)).toBe(true);
    });
  });

  describe('getAppointmentById', () => {
    let getAppointmentResponse: any;
    beforeAll(async () => {
      getAppointmentResponse = await request(app)
        .post('/server/functions/getAppointmentById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          objectId: createAppointmentResponse.body.result.data.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAppointmentResponse.body.result.status).toBe('success');
    });

    it('should return an Appointment object', async () => {
      expect(getAppointmentResponse.body.result).toHaveProperty('data');
    });

    it('the response contains an Appointment object', async () => {
      expect(getAppointmentResponse.body.result.data).toBeInstanceOf(Object);
    });
  });

  describe('Delete Appointment', () => {
    let deleteAppointmentResponse: any;
    beforeAll(async () => {
      deleteAppointmentResponse = await request(app)
        .post('/server/functions/deleteAppointment')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          objectId: createAppointmentResponse.body.result.data.objectId
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteAppointmentResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteAppointmentResponse.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});