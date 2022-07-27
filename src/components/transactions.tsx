import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { fetchTransactionsCurrentMonth } from '../requests/transaction.request';
import TransactionType from '../models/transaction.model';
import Transaction from './transaction';

const Transactions = () => {

  const { t } = useTranslation();
  const { isLoading, isError, data, error } = useQuery<any[], Error>('transactions', fetchTransactionsCurrentMonth);

  if ( isLoading ) {
      return <span>loading</span>
  }

  if ( isError ) {
    return <span>Error { error.message }</span>
  }

  const transactions: TransactionType[] = data ?? [];

  return (
    <div className="transactions card">
      <h3 className="subtitle">{t('transactions.title')}</h3>
      <div className="transactions-table">
        <table>
          <tbody>
            {transactions.map((transaction: TransactionType) => (
              <Transaction key={transaction.id} {...transaction}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactions;
