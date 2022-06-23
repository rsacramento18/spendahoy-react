import { useTranslation } from 'react-i18next';

const Categories = () => {
  const { t } = useTranslation();

  return <h1>{t('router.categories')}</h1>
}

export default Categories;
