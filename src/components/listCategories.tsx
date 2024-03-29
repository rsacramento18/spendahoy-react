import { useTranslation } from 'react-i18next';
import { fetchCategories } from '../requests/categories.request';
import { useQuery } from 'react-query';
import  CategoryType from '../models/categoryType.model';
import Category from './category';
import { useContext } from 'react';
import { SpendahoyContext } from '../context/spendahoyContextProvider';


const ListCategories = () => {
  const { t } = useTranslation();

  const { categoryIdEdit, dispatch } = useContext(SpendahoyContext);
  const { isLoading, isError, data, error } = useQuery<any[], Error>('categories', fetchCategories);

  if ( isLoading ) {
      return <span>loading</span>
  }

  if ( isError ) {
    return <span>Error { error.message }</span>
  }

  const changeCategoryId = (categoryId: number) => {
    console.log('this is the categoryID', categoryId);
    dispatch({
      type: "UPDATE_CATEGORY_ID_EDT",
      payload: categoryId,
    })
  }

  const categories: CategoryType[] = data ?? [];

  if ( categories.length > 1) {
    return (
      <div className="list-categories card">
        <h3>{t('listCategories.title')}</h3>
        <div className="categories">
          {categories.map((category: CategoryType) => (
            <Category key={category.id} {...category} categoryId={categoryIdEdit} onclick={changeCategoryId(category.id)}/>
          ))}
        </div>
      </div>
    )
  } else {
    return <span>No categories found</span>
  }
}

export default ListCategories;
