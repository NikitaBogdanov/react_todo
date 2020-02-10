import TokenApi from './TokenApi'
const domain = 'http://localhost:2500';
let logoutCallbacks;

export default {
    post: (path, data) => {
        return request(path, data, 'POST')
    },
}

function request(path, data, type) {
    data['session_id'] = TokenApi.getToken();

    const requestOptions = {
        method: type,
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch(domain + path, requestOptions)
        .then(handleResponse)
        .then((response) => {
            return response;
        });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 403) {
                callLogoutCallbacks();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const callLogoutCallbacks = () => {
    logoutCallbacks(callback => callback && callback());
};
export const addLogoutCallback = (cb) => {
    logoutCallbacks = (cb);
};