import axios from "axios";

/* Create axios instance */
const api = axios.create({
    baseURL: "https://dev-0tf0hinghgjl39z.api.raw-labs.com",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
    }
});

api.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

/**
 * Passes response.data to services.
 * In dev, intercepts response and logs it into console for dev
 */
api.interceptors.response.use((response) => {
    let validResponse = response;
    return validResponse;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

export default api;