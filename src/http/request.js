import axios from 'axios';

class Request {
    /**
     *
     * @param {string} url
     */
    get(url = '') {
        if (url === '') {
            return Promise.reject(new Error('url is required'));
        } else {
            return axios.get(url);
        }
    }
}

export default new Request();
