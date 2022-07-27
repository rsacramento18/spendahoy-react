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

const fetchTransactionsCurrentMonth = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const res = await axios.get(`${BASE_URL}/transactions?year=${year}&month=${month}`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  return res.data;
}

export { fetchTransactions, fetchTransactionsCurrentMonth };
