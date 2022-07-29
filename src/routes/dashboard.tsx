import { useTranslation } from 'react-i18next';
import CategoriesSum from '../components/categoriesSum';
import Transactions from '../components/transactions';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div className="row height-100">
        <Transactions />
        <CategoriesSum />
      </div>
    </div>
  )
}

export default Dashboard;
