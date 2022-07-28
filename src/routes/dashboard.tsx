import { useTranslation } from 'react-i18next';
import CategoriesSum from '../components/categoriesSum';
import Transactions from '../components/transactions';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <div className="row">
        <Transactions />
        <CategoriesSum />
      </div>
      <div className="row">
        <Transactions />
        <CategoriesSum />
      </div>
    </div>
  )
}

export default Dashboard;
