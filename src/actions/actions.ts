import api from '../apis/twitter';
import { SEARCH } from './types';

export const searchUsers = (searchQuery: string) => async dispatch => {
    const response = await api.get('/search', { params: searchQuery }); // requesting user data
    dispatch({
        type: SEARCH,
        payload: { response: response.data },
    }); // dispatching action with response data
};
