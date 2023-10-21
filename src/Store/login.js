import axios from "axios";

// axios.defaults.baseURL = 'https://tcp-server-66641451cde5.herokuapp.com/auth/';

// let refresh = false;
// axios.interceptors.response.use(resp => resp, async error => {
//     if (!error.response) {
//         return error;
//     }
//     if (error.response.status === 401 && !refresh) {
//         console.log(error.response.status);
//         refresh = true;

//         const response = await axios.post('refresh', {}, { withCredentials: true });
//         console.log(response);

//         if (response.status === 200) {
//             axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`;

//             return axios(error.config);
//         }
//     }
//     refresh = false;
//     return error;

// });
