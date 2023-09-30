import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'bc101ab12fmshe2324b79ba43709p1b310ejsnb44714bb15f7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
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
