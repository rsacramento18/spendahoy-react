import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

const CategoryDetail = () => {
  const { t } = useTranslation();

  return (
    <div className="category-detail card">
      <h3>{t('categoryDetail.title')}</h3>
      <p>the current category is </p>
    </div>
  )
};

export default CategoryDetail;
