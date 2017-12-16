import axios from 'axios';

const port = 8081;
const basePath = `http://localhost:${port}/v1`;

export default {
    async getConfig() {
        return (await axios.get(`${basePath}/config`)).data;
    },
};
