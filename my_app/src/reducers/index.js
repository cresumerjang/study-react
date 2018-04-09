// reducer 엔트리
import { combineReducers } from 'redux';
import VideoReducer from './videoReducer';
import PlayVideo from './playVideo';
import RadioButton from './radioButton';
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
  videos: VideoReducer,
  playVideo: PlayVideo,
  activeValue: RadioButton
});

export default rootReducer;
