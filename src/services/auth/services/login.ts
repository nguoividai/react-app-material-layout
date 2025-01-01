import axiosInstance from 'src/services/axiosInstance';
import Cookies from 'js-cookie';

const login = async (payload: any) => {
  try {
    const response = await axiosInstance.post('/auth/login', payload);
    const { accessToken, refreshToken } = response.data;

    // Store both tokens in cookies
    Cookies.set('accessToken', accessToken, { expires: 1, secure: true, sameSite: 'Strict' });
    Cookies.set('refreshToken', refreshToken, { expires: 30, secure: true, sameSite: 'Strict' });
  } catch (error) {
    console.error('Login failed', error);
  }
};

export default login;
