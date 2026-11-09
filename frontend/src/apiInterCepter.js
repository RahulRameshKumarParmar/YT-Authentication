import axios from "axios";

// URL of Local Machine
const server = "http://localhost:5000"
// URL of Cloud Workspace
// const server = "http://localhost:5000"

const api = axios.create({
    baseURL: server,
    withCredentials: true,
})

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((promise) => {
        if (error) {
            promise.reject(error)
        }
        else {
            promise.resolve(token);
        }
    })
    failedQueue = [];
}

api.interceptors.response.use((response) => response, async () => {
    const originalRequest = error.config;

    if(error.response?.status === 403 && !originalRequest._retry){
        if(isRefreshing){
            return new Promise((resolve, reject) => {
                failedQueue.push({resolve, reject});
            }).then(() => {
                return api(originalRequest);
            })
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            await api.post("/api/v1/refresh");
            processQueue(null);
            return spi(originalRequest);
        } 
        catch (error) {
            processQueue(error, null)
            return Promise.reject(error);
        }
        finally{
            isRefreshing = false;
        }
    }
    return Promise.reject(error);
});

export default api;