const convertPositive = (num: number) => {
  return Math.abs(num);
}

const getCurrency = (num: number) => {
  return  Math.abs(Number(num)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' €';
}

const convertPercentage = (value: number, limit: number) => {
  return (Math.abs(value)*100)/limit;
}

const getCurrentMonth = () => {
  const today = new Date();
  return today.getMonth() + 1;
}

export { getCurrency, convertPercentage, getCurrentMonth };

