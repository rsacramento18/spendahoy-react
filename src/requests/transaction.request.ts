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

const fetchBudgetsCurrentMonth = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const res = await axios.get(`${BASE_URL}/transactionsgrouped?year=${year}&month=${month}`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  return res.data;
}

const updateCategory = async (transactionId: number, categoryId: number) => {
  await axios.post(`${BASE_URL}/transactions/savecategory`,
    {
      id: transactionId,
      categoryId: categoryId
    },
    {
      headers: {
      'Accept': 'application/json'
      }
    }
  );
}

export {
  fetchTransactions,
  fetchTransactionsCurrentMonth,
  fetchBudgetsCurrentMonth,
  updateCategory
};
