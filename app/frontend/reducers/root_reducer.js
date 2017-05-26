import { combineReducers } from 'redux'

import sessionReducer from './session_reducer'
import postsReducer from './posts_reducer'
import searchReducer from './search_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  posts: postsReducer,
  search: searchReducer
});

export default rootReducer
