import { SET_IS_LOGGED, SessionActionTypes, SessionInterface } from '../types';

const initialState: SessionInterface = {
  isLogged: false,
};

export function SessionReducer(
  state: SessionInterface = initialState,
  action: SessionActionTypes,
): SessionInterface {
  switch (action.type) {
    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: action.data,
      };
    default:
      return state;
  }
}
