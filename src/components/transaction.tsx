import moment from 'moment';
import TransactionType from '../models/transaction.model';
import { getCurrency } from '../helpers/number.helper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MillenniumLogo from '../assets/millennium-logo.png';
import MontepioLogo from '../assets/montepio-logo.jpeg';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const Transaction = ( props: TransactionType) => {
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
        <div className="description">{props.description.length > 30 ?
          `${props.description.substring(0, 35)}...` : props.description
        }</div>
        <div className="date">{moment(props.date).format('l')}</div>
      </td>
      <td className={`value ${props.value > 0 ? "sum" : "debt"}`}>
        { getCurrency(props.value)}
      </td>
    </tr>
  )
}

export default Transaction;
