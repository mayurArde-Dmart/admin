import { combineReducers } from 'redux';

const rootReducer = combineReducers({});
export default rootReducer;

type Reducer = ReturnType<typeof rootReducer>;
export type RootState = Reducer;
