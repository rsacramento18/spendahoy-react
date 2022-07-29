import CategoryType from '../models/categoryType.model';

import ProgressBar from './progressBar';

const Transaction = ( props: CategoryType) => {

  return (
    <tr className="category-sum" key={props.id}>
      <td>
        <div className="category-group">
        {props.name}
        <ProgressBar value={Number(props.sum)} limit={props.limit} />
        </div>
      </td>
    </tr>
  )
}

export default Transaction;
