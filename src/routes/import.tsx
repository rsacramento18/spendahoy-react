import { useTranslation } from 'react-i18next';

const Import = () => {
  const { t } = useTranslation();

  return <h1>{t('router.import')}</h1>
}

export default Import;
