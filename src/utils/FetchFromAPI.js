import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com/';

// const options = {
//   params: {
//     part: 'snippet',
//     videoId: 'M7FIvfx5J10'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

const options = {
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const FetchFromAPI = async (url)=>{
  const {data} = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
}

// AIzaSyDfDboqe0rMRGn3X5dB9DkxIhnPC3bSx88