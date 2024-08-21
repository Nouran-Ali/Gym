import { PrivateAxios } from '../api';

const inbodiesService = {
  async create(data) {
    const response = await PrivateAxios.post('/api/v1/inbodies', data);
    return response.data;
  },
  async fetchAll() {
    const response = await PrivateAxios.get('/api/v1/inbodies');
    return response.data;
  },
};

export default inbodiesService;
