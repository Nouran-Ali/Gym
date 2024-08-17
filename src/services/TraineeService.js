import { PrivateAxios } from '../api';

class TraineeService {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/trainees');
    return response.data;
  }

  async create(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {

      formData.append(key, data[key]);
    });
    formData.append('idFace', data['idFace'].file);
    formData.append('idBack', data['idBack'].file);
    formData.append('surgeries', data.surgeries == true ? true : false);

    const response = await PrivateAxios.post('/api/v1/trainees', formData);
    return response.data;
  }

  async updateTrainee({id, data}) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {

      formData.append(key, data[key]);
    });
    formData.append('idFace', data['idFace'].file);
    formData.append('idBack', data['idBack'].file);
    formData.append('surgeries', data.surgeries == true ? true : false);
    console.log(id)
    const response = await PrivateAxios.put(`/api/v1/trainees/${id}`, formData);
    return response.data;
  }

  async delete(id) {
    const response = await PrivateAxios.delete(`/api/v1/trainees/${id}`);
    return response.data;
  }
}

const traineeService = new TraineeService();
export default traineeService;
