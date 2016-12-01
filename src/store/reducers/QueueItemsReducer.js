import {
    ADD_QUEUE_ITEM
} from '../../actions';

const defaultState = {
    items: []
};

export default function queueItemsReducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_QUEUE_ITEM':
            return {
                items: [
                    ...state.items, action.item
                ]
            }
        default:
            return state;
    }
}