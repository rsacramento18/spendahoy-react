import { useState } from 'react';
import moment from 'moment';
import TransactionType from '../models/transaction.model';
import CategoryType from '../models/categoryType.model';
import { useTranslation } from 'react-i18next';
import { getCurrency } from '../helpers/number.helper';
import { useQuery, useQueryClient } from 'react-query';
import { fetchCategories } from '../requests/categories.request';
import { updateCategory } from '../requests/transaction.request';

import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MillenniumLogo from '../assets/millennium-logo.png';
import MontepioLogo from '../assets/montepio-logo.jpeg';

const Transaction = ( props: TransactionType) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [categoryId, setCategoryId] = useState(props.categoryId ? props.categoryId : '');

  const { isLoading, isError, data, error } = useQuery<any[], Error>('categories', fetchCategories);

  const change = async (event: any) => {
    const categoryId = event.target.value;
    await updateCategory(props.id, categoryId).then(() => {
      queryClient.refetchQueries(['categoriesSum']);
    });
    setCategoryId(categoryId);
  }


  const categories: CategoryType[] = data ?? [];

  const getLogo = (organization: string) => {
    switch(organization) {
      case 'Montepio':
        return (<img src={MontepioLogo} alt="MontepioLogo" />);
      case 'Millennium':
        return (<img src={MillenniumLogo} alt="MillenniumLogo" />);
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
          onChange={change}
          name="categoryTransaction"
          value={categoryId}>
          <option value="">{t('transactions.transaction.noCategory')}</option>
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
