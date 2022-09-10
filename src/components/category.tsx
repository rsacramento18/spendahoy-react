import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import CategoryType from '../models/categoryType.model';
import { SpendahoyContext } from '../context/spendahoyContextProvider';

const Category = (props: CategoryType) => {
  const { t } = useTranslation();

  const { dispatch } = useContext(SpendahoyContext);

  const clickCategory = () => {
    dispatch({
        type: 'UPDATE_CATEGORY_ID_EDIT',
        payload: props.id
    });
  }

  return (
    <div className="category">
      <button onClick={clickCategory}>{props.name}</button>
    </div>
  )
}

export default Category;

