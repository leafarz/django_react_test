import axios from 'axios';

const jwtDecode = require('jwt-decode');
const tokenExpInMins = 5;

export const tokenCheck = async (token, onSuccess, onFail) => {
  const refresh_url = `${process.env.REACT_APP_BASEURL}/api/auth/token/refresh/`;
  const hasExpired = (token) => {
    const exp = jwtDecode(token)['exp'];
    return exp - Date.now() < tokenExpInMins * 60;
  };

  if (hasExpired(token)) {
    axios
      .post(
        refresh_url,
        JSON.stringify({
          refresh: localStorage.getItem('refreshToken'),
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        localStorage.setItem('token', res.data.access);
        onSuccess(res.data.access);
      })
      .catch((err) => {
        console.log(err);
        onFail();
      });
  } else {
    onSuccess(token);
  }
};

export default tokenCheck;
