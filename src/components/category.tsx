import { useTranslation } from 'react-i18next';
import CategoryType from '../models/categoryType.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

const Category = (props: CategoryType) => {
  const { t } = useTranslation();

  return (
    <tr className="category">
      <td className="name">
        {props.name}
      </td>
      <td className="actions">
        <button className="view-transaction">
          <FontAwesomeIcon icon={faMoneyCheckDollar} />
          <span> {t('listCategories.actions.transactions')}</span>
        </button>
        <button className="edit">
          <FontAwesomeIcon icon={faPen} />
          <span> {t('listCategories.actions.edit')}</span>
        </button>
        <button className="delete">
          <FontAwesomeIcon icon={faXmark} />
          <span> {t('listCategories.actions.delete')}</span>
        </button>
      </td>
    </tr>
  )
}

export default Category;

