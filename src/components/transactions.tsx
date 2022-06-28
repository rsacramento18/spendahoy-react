import { useQuery } from 'react-query';
import { fetchTransactions } from '../requests/transaction.request';
import TransactionType from '../interfaces/transaction.interface';
import Transaction from './transaction';

const Transactions = () => {

  const { isLoading, isError, data, error } = useQuery<any[], Error>('transactions', fetchTransactions);

  if ( isLoading ) {
      return <span>loading</span>
  }

  if ( isError ) {
    return <span>Error { error.message }</span>
  }

  const transactions: TransactionType[] = data ?? [];

  return (
    <div className="transactions card">
      <table>
        <tbody>
          {transactions.map((transaction: TransactionType) => (
            <Transaction key={transaction.id} {...transaction}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions;
