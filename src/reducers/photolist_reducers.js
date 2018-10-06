export default function(state = {}, action) {

    switch (action.type) {
        case 'GET_PHOTOS_ALL':
            return {...state, photoList: action.payload}
        case 'GET_PHOTOS_BY_QUERY':
            return {...state, photoList: action.payload}
        default:
            return state;
    }

}
