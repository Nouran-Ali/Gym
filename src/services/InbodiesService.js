import { PrivateAxios } from '../api';

class InbodiesService {

  async getAll() {
    const response = await PrivateAxios.get('/api/v1/inbodies');
    return response.data;
  }

  async create(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append('idFace', data['idFace'].file);
    formData.append('idBack', data['idBack'].file);
    formData.append('surgeries', data.surgeries === true ? true : false);

    const response = await PrivateAxios.post('/api/v1/inbodies', formData);
    return response.data;
  }

}

const inbodiesService = new InbodiesService();
export default inbodiesService;
