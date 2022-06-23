import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();

  return <h1>{t('router.dashboard')}</h1>
}

export default Dashboard;
