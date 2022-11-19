import { useTranslation } from 'react-i18next';

const Import = () => {
  const { t } = useTranslation();

  return (
    <div className="import">
      <h1>{t('router.import')}</h1>
    </div>
  );
}

export default Import;
