/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    const url = type === 'password'
      ? 'http://127.0.0.1:8000/api/v1/users/updateMyPassword'
      : 'http://127.0.0.1:8000/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data
    })

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} changed and saved`)
    }
  } catch (error) {
    console.log('ERROR 2', error);
    showAlert('error', error.response.data.message);
  }
};
