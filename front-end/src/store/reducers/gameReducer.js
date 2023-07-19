import { END_LOADING, START_LOADING } from '../actions/actions.types';
const INITIAL_STATE = { isLoading: false };
const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
export default gameReducer;
