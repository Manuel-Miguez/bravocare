import SweetAlert, { SweetAlertOptions } from 'sweetalert2';
import { ReactSweetAlert } from 'sweetalert2-react-content';

export const waitingModal = (Swal: typeof SweetAlert & ReactSweetAlert, titleText: string) => {
  const response: SweetAlertOptions<any, any> = {
    title: <p>{titleText}</p>,
    didOpen: () => {
      Swal.showLoading(null);
    },
  };
  return response;
};

export const errorModal = (titleText: string) => {
  const response: SweetAlertOptions<any, any> = {
    title: <p>{titleText}</p>,
    icon: 'error',
  };
  return response;
};
