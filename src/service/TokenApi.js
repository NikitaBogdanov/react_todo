export default {
    setToken: (data) => {
        localStorage.setItem("sessionId", data);
    },
    removeToken: () => {
        localStorage.removeItem("sessionId");
    },
    getToken: () => {
        return localStorage.getItem("sessionId");
    },
};