import CategorySumType from '../models/categorySum.model';

import ProgressBar from './progressBar';

const Transaction = ( props: CategorySumType) => {

  return (
    <tr className="category-sum" key={props.id}>
      <td className="name">
        {props.name}
      </td>
      <td className="value">
        <ProgressBar value={Number(props.sum)} limit={props.limit} />
      </td>
    </tr>
  )
}

export default Transaction;
