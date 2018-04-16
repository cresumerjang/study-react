import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE' 
  }; 

export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, filter => {
    return { filter }
});

export default handleActions({
    [SET_VISIBILITY_FILTER]: (state, action) => {
        return action.payload.filter;
    //   return produce(state, draft => {
        
    //   });
    }
  }, VisibilityFilters.SHOW_ALL);