// reducer 엔트리
import { combineReducers } from 'redux';
import VideoReducer from './videoReducer';
// import { CategoryFilter, PriceFilter, OptionFilter } from './filter/index';
// import { Favorite, Cart } from './dealCard/index';

// const rootReducer = combineReducers({
//     categoryFilter: CategoryFilter,
//     priceFilter: PriceFilter,
//     optionFilter: OptionFilter,
//     favorite: Favorite,
//     cart: Cart
// });

const rootReducer = combineReducers({
  videos: VideoReducer
});

export default rootReducer;
