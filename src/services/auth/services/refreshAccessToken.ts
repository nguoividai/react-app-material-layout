import Cookies from 'js-cookie';
import axiosInstance from 'src/services/axiosInstance';

const refreshAccessToken = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    // Send the refresh token to the server to get a new access token
    const response = await axiosInstance.post('/auth/refresh', { refreshToken });

    const { accessToken } = response.data;

    // Update the access token in the cookie
    Cookies.set('accessToken', accessToken, { expires: 1, secure: true, sameSite: 'Strict' });

    return accessToken;
  } catch (error) {
    console.error('Failed to refresh access token', error);
    throw error;
  }
};

export default refreshAccessToken;
