import { PrivateAxios } from '../api';

class TraineeService {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/trainees');
    return response.data;
  }

  async create(data) {
    console.log('🚀 ~ TraineeService ~ create ~ data:', data);
    const formData = new FormData();

    const d = new Date();
    console.log('🚀 ~ TraineeService ~ create ~ d:', d);

    // Append each key-value pair to FormData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append('idFace', data['idFace'].file);
    formData.append('idBack', data['idBack'].file);

    const response = await PrivateAxios.post('/api/v1/trainees', formData);
    return response.data;
  }
}

const traineeService = new TraineeService();
export default traineeService;
