import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const FilterStatus = {
    SHOW: 'SHOW',
    HIDE: 'HIDE'
  }; 

export const setFilterStatus = createAction(TOGGLE_FILTER, filter => {
    return { filter }
});

export default handleActions({
    [TOGGLE_FILTER]: (state, action) => {
        let filterList = [...state];
        filterList[action.payload.filter.targetIndex].isActive = !state[action.payload.filter.targetIndex].isActive;
        return filterList;

    //   return produce(state, draft => {
        
    //   });
    }
  }, [
    {
        filterName: '브랜드',
        isActive: true,
        filterItems: [
            { name: '나이키', type: 'checkbox', status: true },
            { name: '아디다스', type: 'checkbox', status: false }
        ]
    },
    {
        filterName: '카테고리',
        isActive: true,
        filterItems: [
            { name: '스포츠', type: 'checkbox', status: false }
        ]
    }
]);