import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const fetchTransactions = async () => {
  const res = await axios.get(`${BASE_URL}/transactions`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  return res.data;
}

export { fetchTransactions };
