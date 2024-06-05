import { combineReducers } from 'redux';
import counter from './counter';
import sign from './sign';

const rootReducer = combineReducers({ counter, sign });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
