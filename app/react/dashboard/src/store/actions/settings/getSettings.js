import { userService } from '../../../api/userService';
import { settingsActionTypes } from '../../const/settingsActionTypes';

export const getSettings = () => (dispatch) => {
  dispatch({
    type: settingsActionTypes.SETTINGS_LOADING,
  });

  userService
    .getUserData()
    .then((data) => {
      dispatch({
        type: settingsActionTypes.SETTINGS_LOAD_SUCCESS,
        payload: data?.fields_to_show_on_list,
      });
    })
    .catch((err) => {
      dispatch({
        type: settingsActionTypes.SETTINGS_LOAD_ERROR,
        payload: err,
      });
    });
};
