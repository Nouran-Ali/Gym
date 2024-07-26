import { PrivateAxios } from '../api';

// class AttendanceServices {
//   async getAll() {
//     const response = await PrivateAxios.get('/api/v1/attendance');
//     return response.data;
//   }

//   static async create(attendanceData) {
//     const response = await fetch('/api/v1/attendance', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(attendanceData),
//     });
//     if (!response.ok) {
//       throw new Error('Failed to create attendance');
//     }
//     return response.json();
//   }

//   static async delete(id) {
//     const response = await fetch(`/api/v1/attendance/${id}`, {
//       method: 'DELETE',
//     });
//     if (!response.ok) {
//       throw new Error('Failed to delete attendance');
//     }
//     return response.json();
//   }
// }

class TraineeService {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/attendance');
    return response.data;
  }

  async create(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    const response = await PrivateAxios.post('/api/v1/attendance', formData);
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

const traineeService = new TraineeService();
export default traineeService;