import axios from 'axios';

const request = async (url: string): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
};

export default request;
