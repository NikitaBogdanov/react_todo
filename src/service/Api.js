const domain = 'http://localhost:2500';

export default {
    post: (path, data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        return fetch(domain + path, requestOptions)
            .then(handleResponse)
            .then(sessionId => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('sessionId', JSON.stringify(sessionId));

                return sessionId;
            });
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
