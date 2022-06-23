import { useTranslation } from 'react-i18next';

const Budget = () => {
  const { t } = useTranslation();

  return <h1>{t('router.budget')}</h1>
}

export default Budget;
