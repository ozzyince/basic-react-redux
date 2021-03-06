import { combineReducers } from 'redux';

import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';

import initial from '../initial';

type CategoriesState = NS.IReduxState['data']['categories'];

function categoriesReducer(state: CategoriesState = initial.data.categories, action: NS.Action): CategoriesState {
  switch (action.type) {
    case 'CATEGORY_SELECT:LOAD_CATEGORIES_COMPLETED': {
      return action.payload;
    }
    default: return state;
  }
}

export default combineReducers({
  categories: categoriesReducer,
} as ReducersMap<NS.IReduxState['data']>);
