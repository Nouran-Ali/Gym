import { PrivateAxios } from '../api';

class AttendanceServices {
  async getAll() {
    const response = await PrivateAxios.get('/api/v1/attendance');
    return response.data;
  }

  // async create(data) {
  //   const formData = new FormData();

  //   // Append each key-value pair to FormData
  //   Object.keys(data).forEach((key) => {
  //     formData.append(key, data[key]);
  //   });
  //   formData.append('idFace', data['idFace'].file);
  //   formData.append('idBack', data['idBack'].file);

  //   const response = await PrivateAxios.post('/api/v1/attendance', formData);
  //   return response.data;
  // }
}

const attendanceService = new AttendanceServices();
export default attendanceService;
