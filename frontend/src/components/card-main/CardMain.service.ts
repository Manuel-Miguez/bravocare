import axios from 'axios';
import { ApiResponse } from '../../types/Api-response.interface';
import { Overlaps } from '../../types/Overlap.interface';
import { axiosErrorHandler } from '../../utils/axiosError.utils';

export const compareShifts = async (fisrtShift: number, secondShift: number) => {
  try {
    const params = new URLSearchParams({
      first: fisrtShift.toString(),
      second: secondShift.toString(),
    });
    const url = process.env.REACT_APP_API_URL + '/v1/question-shifts/compare?' + params.toString();
    if (!url) throw new Error('There was an error Making the Call to the API');
    const response = await axios
      .get<ApiResponse<Overlaps>>(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .catch(axiosErrorHandler);
    if (!response.data || !response.data.ok) throw new Error('There was an error Making the Call to the API');
    return response.data.data;
  } catch (error) {
    throw String((error as Error).message);
  }
};

export const getQueries = async (question: '4' | '5' | '6', param: string = '') => {
  try {
    const url = getUrlForQueries(question, param);
    const response = await axios
      .get<ApiResponse<Record<string, string | number>>>(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .catch(axiosErrorHandler);
    if (!response.data || !response.data.ok) throw new Error('There was an error Making the Call to the API');
    return response.data.data;
  } catch (error) {
    throw String((error as Error).message);
  }
};

const getUrlForQueries = (question: '4' | '5' | '6', param: string = '') => {
  let path: string = '';
  switch (question) {
    case '4':
      path = '/v1/jobs/remaining';
      break;
    case '5':
      path = '/v1/nurses/available-to-hire';
      break;
    case '6':
      path = `/v1/nurses/${param}/coworkers`;
      break;
  }
  const url = process.env.REACT_APP_API_URL + path;
  if (!process.env.REACT_APP_API_URL || !url) throw new Error('There was an error Making the Call to the API');
  return url;
};
