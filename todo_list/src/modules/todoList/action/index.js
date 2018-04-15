import { createAction } from 'redux-actions';

export const CHANGE_INPUT = 'todo/CHANGE_INPUT';
export const INSERT = 'todo/INSERT';
export const TOGGLE = 'todo/TOGGLE';
export const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);