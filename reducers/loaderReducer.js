import { START_LOADER, STOP_LOADER } from '@/types/loaderActions';

const initialState = {
    preload: true,
};

export function loaderReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADER:
            return {
                ...state,
                preload: true,
            };
        case STOP_LOADER:
            return {
                ...state,
                preload: false,
            };
        default:
            return state;
    }
}
