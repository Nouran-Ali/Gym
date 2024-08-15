import { PrivateAxios } from '../api';


class AttendanceService {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/attendance');
    return response.data;
  }

  async getById(traineeId) {
    const response = await PrivateAxios.get(`/api/v1/attendance/${traineeId}`);
    return response.data;
  }

  async create(parcode) {
    const response = await PrivateAxios.post(`/api/v1/attendance/${parcode}`);
    return response.data;
  }

  static async delete(id) {
    const response = await fetch(`/api/v1/attendance/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete attendance');
    }
    return response.json();
  }
}

const attendanceService = new AttendanceService();
export default attendanceService;
