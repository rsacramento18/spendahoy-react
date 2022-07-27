import { useTranslation } from 'react-i18next';
import Transactions from '../components/transactions';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <Transactions />
    </div>
  )
}

export default Dashboard;
