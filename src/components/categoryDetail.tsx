import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { SpendahoyContext }  from '../context/spendahoyContextProvider';
import CategoryDetailType from "../models/categoryDetailType";
import { fetchCategoryDetail } from "../requests/categories.request";

const CategoryDetail = () => {
  const { t } = useTranslation();
  const { categoryIdEdit } = useContext(SpendahoyContext);
  const { isLoading, isError, data, error } = useQuery<any, Error>(['categoryDetail', categoryIdEdit],
    () => fetchCategoryDetail(categoryIdEdit));

  if ( isLoading ) {
    return <span>loading</span>
  }

  if ( isError ) {
    return <span>Error { error.message }</span>
  }

  const categoryDetail: CategoryDetailType = data ?? null;

  if ( categoryDetail === undefined ) {
    return <span>No category Detail found</span>
  }

  return (
    <div className="category-detail card">
      <h3>{t('categoryDetail.title')}</h3>
      <p>the current category is {categoryDetail.name}</p>
    </div>
  )
};

export default CategoryDetail;
