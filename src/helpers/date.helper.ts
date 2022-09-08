import { useQuery } from 'react-query';

const getCurrentMonth = () => {
  const today = new Date();
  return today.getMonth() + 1;
}

const getCurrentYear = () => {
  const today = new Date();
  return today.getFullYear();
}

export { getCurrentMonth, getCurrentYear };
