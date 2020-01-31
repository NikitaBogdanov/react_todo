export default {
    setToken: (data) => {
        console.log("set token / " + data);
        localStorage.setItem("sessionId", data);
    },
    removeToken: () => {
        console.log("remove token");
        localStorage.removeItem("sessionId");
    },
    getToken: () => {
        console.log("get token / " + localStorage.getItem("sessionId"));
        return localStorage.getItem("sessionId");
    },
};