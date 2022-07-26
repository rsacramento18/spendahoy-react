import TransactionType from '../interfaces/transaction.interface';

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
      <td>
        {props.description.length > 30 ?
          `${props.description.substring(0, 30)}...` : props.description
        }
      </td>
      <td className={`value ${props.value > 0 ? "sum" : "debt"}`}>
        { props.value}
      </td>
      <td className="category">
        { props.categoryName}
      </td>
    </tr>
  )
}

export default Transaction;
