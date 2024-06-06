import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions/signActions';

// type & interface
export interface SignState {
  user: {
    id: string;
    isLoggedIn: boolean;
  };
}

// set initial state
const initialState: SignState = {
  user: {
    id: '',
    isLoggedIn: false,
  },
};

// action 호출
const { LOGIN, LOGOUT } = actions;
type SignAction = ActionType<typeof actions>;

// reducer
const sign = createReducer<SignState, SignAction>(initialState, {
  [LOGIN]: (state, action) => ({
    ...state,
    user: {
      id: action.payload.id,
      isLoggedIn: true,
    },
  }),
  [LOGOUT]: (state) => ({
    ...state,
    user: {
      id: '',
      isLoggedIn: false,
    },
  }),
});

export default sign;
