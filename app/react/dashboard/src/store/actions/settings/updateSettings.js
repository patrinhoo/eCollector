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
        payload: data?.fields_to_show,
      });
    })
    .catch((err) => {
      dispatch({
        type: settingsActionTypes.SETTINGS_LOAD_ERROR,
        payload: err,
      });
    });
};
