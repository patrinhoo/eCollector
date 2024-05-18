import { userService } from '../../../api/userService';
import { settingsActionTypes } from '../../const/settingsActionTypes';

export const updateSettings = (settingsData) => (dispatch) => {
  dispatch({
    type: settingsActionTypes.SETTINGS_LOADING,
  });

  return userService
    .update(settingsData)
    .then((data) => {
      dispatch({
        type: settingsActionTypes.SETTINGS_LOAD_SUCCESS,
        payload: {
          catalog_number: data?.catalog_number,
          expiration_date: data?.expiration_date,
          gsm_operator: data?.gsm_operator,
          magnetic_stripe_width: data?.magnetic_stripe_width,
          material_type: data?.material_type,
          nr_of_pulses: data?.nr_of_pulses,
          number_printype: data?.number_printype,
          number_type: data?.number_type,
          prefix: data?.prefix,
          price: data?.price,
          value: data?.value,
          printed_amount: data?.printed_amount,
          producer: data?.producer,
          production_date: data?.production_date,
          publisher: data?.publisher,
          series: data?.series,
          shape: data?.shape,
          surface_type: data?.surface_type,
          chip_type: data?.chip_type,
          comment: data?.comment,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: settingsActionTypes.SETTINGS_LOAD_ERROR,
        payload: err,
      });
    });
};
