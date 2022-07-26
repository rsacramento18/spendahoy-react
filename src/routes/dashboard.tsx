import { useTranslation } from 'react-i18next';
import Transactions from '../components/transactions';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard">
      <h1>{t('router.dashboard')}</h1>
      <Transactions />
    </div>
  )
}

export default Dashboard;
