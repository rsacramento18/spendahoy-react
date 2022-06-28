import TransactionType from '../interfaces/transaction.interface';

const Transaction = ( props: TransactionType) => {
  return (
    <tr key={props.id}>
      <td>
        { props.date}
      </td>
      <td>
        { props.description}
      </td>
      <td>
        { props.value}
      </td>
      <td>
        { props.categoryName}
      </td>
      <td>
        { props.organizationName}
      </td>
    </tr>
  )
}

export default Transaction;
