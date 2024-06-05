import { createAction } from 'typesafe-actions';

export const LOGIN = 'sign/LOGIN';
export const LOGOUT = 'sign/LOGOUT';

export const login = createAction(LOGIN)<{ id: string }>();
export const logout = createAction(LOGOUT)();
