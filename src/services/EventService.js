import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/MrKyHn1/vue-mastery",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        ContentType: "application/json",
    },
});

export default {
    getEvents() {
        console.log('events')
        return apiClient.get("/events");
    },
    getEvent(id) {
        return apiClient.get("/events/" + id);
    },
};
