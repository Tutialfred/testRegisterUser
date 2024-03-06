/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import axios from 'axios';
import { createAdvice } from '../controllers/adviceControllers';

export async function sendToIaEndpoint(objectData: any, Parse: any, objectIdPerson: string) {
  const bodyIa = {
    UID: objectData.per_user_id,
    User: '',
    description: '',
    data: {
      id_params: '011',
      view_name: '',
      prompt: objectData.per_interests,
    },
  };

  const jsonString = JSON.stringify(bodyIa);

  try {
    // Realizar la solicitud POST a la API de recomendación
    const recommendationResponse = await axios.post('http://192.168.50.214:7101/api/v1/recommendation/', jsonString, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(recommendationResponse.data);

    // Verificar si la solicitud fue exitosa
    if (recommendationResponse.status === 200) {
      recommendationResponse.data.userId = objectData.per_user_id.objectId;

      // Agrega el objectIdPerson a los datos de la respuesta
      recommendationResponse.data.objectIdPerson = objectIdPerson;
      // Pasar la respuesta de la API de recomendación a createAdvice

      const adviceData = {
        adv_interaction_Id: '',
        adv_interaction_type: '',
        adv_user_id: objectData.per_user_id,
        adv_recommendations: recommendationResponse.data.output,
        adv_user_feedback: '',
        objectIdPerson,
      };

      const adviceResponse = await createAdvice(Parse)({ params: adviceData });

      return adviceResponse;
    } else {
      // Devolver algún valor o lanzar un error en caso de que la solicitud no sea exitosa
      throw new Parse.Error(
        Parse.Error.OPERATION_FORBIDDEN,
        'The POST request to the recommendation API was not successful',
      );
    }
  } catch (error) {
    console.error(`Error making the POST request to the recommendation API: ${error}`);
    // Puedes optar por devolver un valor específico en caso de error
    throw error;
  }
}
