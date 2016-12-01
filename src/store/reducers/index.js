import { combineReducers } from 'redux';
import queueItemsReducer from './QueueItemsReducer';

export default combineReducers({
    queueItems: queueItemsReducer
});