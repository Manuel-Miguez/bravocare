import axios from 'axios';
import { ApiResponse } from '../../types/Api-response.interface';
import { QuestionShift } from '../../types/Question-shift.interface';
import { axiosErrorHandler } from '../../utils/axiosError.utils';

export const getShiftList = async () => {
  try {
    const url = process.env.REACT_APP_API_URL + '/v1/question-shifts';
    if (!url) throw new Error('There was an error Making the Call to the API');
    const response = await axios
      .get<ApiResponse<QuestionShift[]>>(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .catch(axiosErrorHandler);
    if (!response.data || !response.data.data.length) throw new Error('There was an error Making the Call to the API');
    return response.data.data;
  } catch (error) {
    throw String((error as Error).message);
  }
};
