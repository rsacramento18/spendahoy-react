import moment from 'moment';
import TransactionType from '../models/transaction.model';
import CategoryType from '../models/categoryType.model';
import { useTranslation } from 'react-i18next';
import { getCurrency } from '../helpers/number.helper';
import { useQuery } from 'react-query';
import { fetchCategories } from '../requests/categories.request';

import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MillenniumLogo from '../assets/millennium-logo.png';
import MontepioLogo from '../assets/montepio-logo.jpeg';

const Transaction = ( props: TransactionType) => {
  const { t } = useTranslation();

  const { isLoading, isError, data, error } = useQuery<any[], Error>('categories', fetchCategories);

  const categories: CategoryType[] = data ?? [];

  const getLogo = (organization: string) => {
    switch(organization) {
      case 'Montepio':
        return (<img src={MontepioLogo} />);
      case 'Millennium':
        return (<img src={MillenniumLogo} />);
      default:
        return (<FontAwesomeIcon icon={faBuildingColumns} />);

    }
  }

  return (
    <tr className="transaction" key={props.id}>
      <td className="logo">
        {getLogo(props.organizationName)}
      </td>
      <td className="description-date">
        <div className="description">{props.description}</div>
        <div className="date">{moment(props.date).format('l')}</div>
      </td>
      <td className="transaction-category">
        <select
          name="categoryTransaction"
          defaultValue=""
          value={props.categoryId ? props.categoryId : ''}>
          <option className="no-category" value="" disabled>{t('transactions.transaction.noCategory')}</option>
          {categories
            .map((category: CategoryType) => (
              <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        
      </td>
      <td className={`value ${props.value > 0 ? "sum" : "debt"}`}>
        { getCurrency(props.value)}
      </td>
    </tr>
  )
}

export default Transaction;
