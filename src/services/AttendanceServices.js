import { PrivateAxios } from '../api';

class AttendanceServices {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/attendance');
    return response.data;
  }

  static async create(attendanceData) {
    const response = await fetch('/api/v1/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attendanceData),
    });
    if (!response.ok) {
      throw new Error('Failed to create attendance');
    }
    return response.json();
  }
}

const attendanceService = new AttendanceServices();
export default attendanceService;
