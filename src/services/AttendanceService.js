import { PrivateAxios } from '../api';


class AttendanceService {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/attendance');
    return response.data;
  }

  async getById(parcode) {
    const response = await PrivateAxios.get(`/api/v1/attendance/${parcode}`);
    return response.data;
  }

  async create(parcode) {
    const response = await PrivateAxios.post(`/api/v1/attendance/${parcode}`);
    return response.data;
  }

  // async create(parcode) {
  //   const response = await PrivateAxios.post(`/api/v1/attendance`);
  //   return response.data;
  // }

  async delete(id) {
    const response = await PrivateAxios.delete(`/api/v1/attendance/${id}`);
    if (!response.ok) {
      throw new Error('Failed to delete attendance');
    }
    return response.json();
  }
}

const attendanceService = new AttendanceService();
export default attendanceService;
