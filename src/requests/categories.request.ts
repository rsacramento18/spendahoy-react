import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const fetchCategories = async () => {
  const res = await axios.get(`${BASE_URL}/categories`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  return res.data;
}