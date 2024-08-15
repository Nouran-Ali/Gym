import { PrivateAxios } from '../api';

class InbodiesService {

  async getAll() {
    const response = await PrivateAxios.get('/api/v1/inbodies');
    return response.data;
  }

}

const inbodiesService = new InbodiesService();
export default inbodiesService;
