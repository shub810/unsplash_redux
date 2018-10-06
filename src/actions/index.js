import { URL, AUTH_TOKEN } from '../config';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export function photoListAll (page) {
    const request =  axios.get(`${URL}/photos?page=${page}&per_page=9`)
                        .then(response => response.data);

    return {
        type: 'GET_PHOTOS_ALL',
        payload: request
    }
} 

export function photoListByQuery(page, query) {
    const request = axios.get(`${URL}/search/photos?page=${page}&per_page=9&query=${query}`)
                    .then (response => response.data)
                    
    return {
        type: 'GET_PHOTOS_BY_QUERY',
        payload: request
    }
}
