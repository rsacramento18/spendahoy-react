import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { fetchBudgetsCurrentMonth } from '../requests/transaction.request';
import CategoryType from '../models/categoryType.model';
import CategorySum from './categorySum';

const CategoriesSum = () => {
  const { t } = useTranslation();

  const { isLoading, isError, data, error } = useQuery<any[], Error>('categories', fetchBudgetsCurrentMonth);

  if ( isLoading ) {
      return <span>loading</span>
  }

  if ( isError ) {
    return <span>Error { error.message }</span>
  }

  const categoriesSum: CategoryType[] = data ?? [];

  if ( categoriesSum.length > 1 ) {
    return (
      <div className="categories-sum card">
        <h3 className="subtitle">{t('categories.title')}</h3>
        <div className="categories-sum-table">
          <table>
            <tbody>
              {categoriesSum.map((categorySum: CategoryType) => {
                if (categorySum.name !== 'Não Identificado') {
                  return (<CategorySum key={categorySum.id} {...categorySum}/>);
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <span>No categories found</span>
  }
}

export default CategoriesSum;
