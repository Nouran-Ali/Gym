import { PrivateAxios } from '../api';

class TraineeService {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/trainees');
    return response.data;
  }
}

const traineeService = new TraineeService();
export default traineeService;