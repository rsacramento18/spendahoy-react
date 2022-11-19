import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const fetchOrganizations = async () => {
  const res = await axios.get(`${BASE_URL}/organizations`, {
    headers: {
      'Accept': 'application/json'
    }
  });

  return res.data;
}

const importTransactions = async () => {
  const res = await axios.post(`${BASE_URL}/import`, {
    headers: {
      'Accept': 'application/json'
    }
  });

  return res.status;
}

export {
  fetchOrganizations,
  importTransactions
}
