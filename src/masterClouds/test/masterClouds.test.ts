/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';
import { app, httpServer } from '../../index';
import { loginUser } from '../../cloud/evaluacion_de_salud_y_bienestar_de_rrhh/test/utils/loginUser';

describe('MasterCloud tests', () => {
  let sessionToken: string;
  let createTable: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createTable = await request(app)
      .post('/server/functions/registerTableFromJSON')
      .set('X-Parse-Application-Id', '007')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        tableName: 'Test13',
        data: {
          plate_name: 'nombre_del_plato_',
          plate_description: 'descripcion_del_plato',
          plate_img: 'url_del_plato',
          plate_type: 'tipo_de_plato',
          plate_state: 'estado_del_plato',
        },
      });
  });

  describe('Create Table', () => {
    it('El estado de la respuesta es "success', async () => {
      expect(createTable.body.result.status).toBe('success');
    });

    it('La petición debería retornar un mensaje de éxito', async () => {
      expect(createTable.body.result.message).toBe('Table created successfully');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(createTable.body.result.result).toBe(true);
    });
  });

  describe('updateTableFromJSON', () => {
    let updateTable: any;
    beforeAll(async () => {
      updateTable = await request(app)
        .post('/server/functions/updateTableFromJSON')
        .set('X-Parse-Application-Id', '007')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          tableName: 'Test13',
          tableFromJSONId: createTable.body.result.table.objectId,
          data: {
            plate_name: 'nombre_del_pla',
          },
        });
    }, 20000);

    it('El estado de la respuesta es "success', async () => {
      expect(updateTable.body.result.status).toBe('success');
    });

    it('La petición debería retornar un objeto table', async () => {
      expect(updateTable.body.result).toHaveProperty('table');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(updateTable.body.result.result).toBe(true);
    });
  });

  describe('getAllTableFromJSON', () => {
    let getAllTable: any;
    beforeAll(async () => {
      getAllTable = await request(app)
        .post('/server/functions/getAllTableFromJSON')
        .set('X-Parse-Application-Id', '007')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          tableName: 'Test13',
          page: 1,
        });
    });

    it('El estado de la respuesta es "success', async () => {
      expect(getAllTable.body.result.status).toBe('success');
    });

    it('La petición debería retornar un objeto table', async () => {
      expect(getAllTable.body.result).toHaveProperty('table');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(getAllTable.body.result.result).toBe(true);
    });
  });

  describe('getTableFromJSONById', () => {
    let getTableFromJSONById: any;
    beforeAll(async () => {
      getTableFromJSONById = await request(app)
        .post('/server/functions/getTableFromJSONById')
        .set('X-Parse-Application-Id', '007')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          tableName: 'Test13',
          tableFromJSONId: createTable.body.result.table.objectId,
        });
    });

    it('El estado de la respuesta es "success', async () => {
      expect(getTableFromJSONById.body.result.status).toBe('success');
    });

    it('La petición debería retornar un objeto table', async () => {
      expect(getTableFromJSONById.body.result).toHaveProperty('table');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(getTableFromJSONById.body.result.result).toBe(true);
    });
  });

  describe('Find in table', () => {
    let findInTable: any;
    beforeAll(async () => {
      findInTable = await request(app)
        .post('/server/functions/findInTable')
        .set('X-Parse-Application-Id', '007')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          table: 'Test13',
          key: 'plate_description',
          value: 'descripcion_del_plato',
          page: 1
        });
    });

    it('El estado de la respuesta es "success', async () => {
      expect(findInTable.body.result.status).toBe('success');
    });

    it('La petición debería retornar un objeto table', async () => {
      expect(findInTable.body.result).toHaveProperty('data');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(findInTable.body.result.result).toBe(true);
    });
  });

  describe('deleteTableFromJSON', () => {
    let deleteTable: any;
    beforeAll(async () => {
      deleteTable = await request(app)
        .post('/server/functions/deleteTableFromJSON')
        .set('X-Parse-Application-Id', '007')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          tableName: 'Test13',
          tableFromJSONId: createTable.body.result.table.objectId,
        });
    });

    it('El estado de la respuesta es "success', async () => {
      expect(deleteTable.body.result.status).toBe('success');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(deleteTable.body.result.result).toBe(true);
    });
  });

  afterAll(() => {
    httpServer.close();
  });
});