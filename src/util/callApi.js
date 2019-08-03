import axios from 'axios';
import * as Config from '../constants/config';

export default function CallApi (endpoint, method = 'GET', data) {
return axios({
    method: method,
    url: `${Config.urlApi}?limit=${endpoint}`,
    data: data
    }).catch(err => {
        console.log(err);
    })
}