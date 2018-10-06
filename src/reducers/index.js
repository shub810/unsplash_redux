import { combineReducers } from 'redux';
import photos from './photolist_reducers';

const rootReducers = combineReducers({
    photos
});

export default rootReducers;