import { settingsActionTypes } from '../const/settingsActionTypes';

export const settings = (state, { payload, type }) => {
  switch (type) {
    case settingsActionTypes.SETTINGS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case settingsActionTypes.SETTINGS_LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: {
          ...state.data,
          ...payload,
        },
      };
    }

    case settingsActionTypes.SETTINGS_LOAD_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
