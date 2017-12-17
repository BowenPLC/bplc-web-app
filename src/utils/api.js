import axios from 'axios';

const port = 8081;
const basePath = `http://localhost:${port}/v1`;

export default {
    async getConfig() {
        return (await axios.get(`${basePath}/config`)).data;
    },
    async getCompleteIOMap() {
        return (await axios.get(`${basePath}/io/complete`)).data;
    },
    async setIO(mod, index, state) {
        await axios.post(`${basePath}/io/${mod}/${index}`, { state: state, });
    },
};
