import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { fetchTransactionsCurrentMonth } from '../requests/transaction.request';
import { SpendahoyContext }  from '../context/spendahoyContextProvider';
import TransactionType from '../models/transaction.model';
import Transaction from './transaction';

const Transactions = () => {

  const { t } = useTranslation();
  const { month } = useContext(SpendahoyContext);
  const { isLoading, isError, data, error } = useQuery<any[], Error>(['transactions', month], () => fetchTransactionsCurrentMonth(month));

  if ( isLoading ) {
      return <span>loading</span>
  }

  if ( isError ) {
    return <span>Error { error.message }</span>
  }

  const transactions: TransactionType[] = data ?? [];

  if ( transactions.length === 0 ) {
    return <span>No transactions found</span>
  }

  return (
    <div className="transactions card">
      <div className="subtitle-filters">
        <div className="subtitle">
          <h3 className="subtitle">{t('transactions.title')}</h3>
        </div>
        <div className="filters">
        </div>
      </div>
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
