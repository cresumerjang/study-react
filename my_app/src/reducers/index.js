// reducer 엔트리
import { conbineReducers } from 'redux';
import { CategoryFilter, PriceFilter, OptionFilter } from './filter/index';
import { Favorite, Cart } from './dealCard/index';

const rootReducer = combineReducers({
    categoryFilter: CategoryFilter,
    priceFilter: PriceFilter,
    optionFilter: OptionFilter,
    favorite: Favorite,
    cart: Cart
});

export default rootReducer;
