import { PrivateAxios, publicAxios } from '../api';

class AuthService {
  async login(data) {
    const response = await publicAxios.post('/api/v1/login', data);
    return response.data;
  }

  async me(){
    const response = await PrivateAxios.get('/api/v1/me');
    return response.data;
  }
}

const authService = new AuthService();
export default authService;