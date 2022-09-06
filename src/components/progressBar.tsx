import { useTranslation } from 'react-i18next';
import { convertPercentage, getCurrency } from '../helpers/number.helper';
import ProgressBarType from '../models/progressBarType';

const ProgressBar = (props: ProgressBarType) => {
  const { t } = useTranslation();

  const getPercentageValue = (value: number, limit: number) => {
    const percentageValue = convertPercentage(value, limit);
    if (percentageValue > 100) return 100;

    return percentageValue;
  }

  const lineStyles = () => {
    const value = getPercentageValue(props.value, props.limit);

    if(value >= 100) {
      return {
        width:`${value}%`,
        backgroundColor: `var(--color-danger)`
      }
    }
    else if (value >= 75) {
      return {
        width:`${value}%`,
        backgroundColor: `var(--color-highlight)`
      }
    }
    return {
      width:`${value}%`,
      backgroundColor: `var(--color-secondary)`
    }
  }

  const innerPointStyles = () => {
    const value = getPercentageValue(props.value, props.limit);

    if(value >= 100) {
      return {
        border: `1px solid var(--color-dark)`,
        backgroundColor: `var(--color-danger)`
      }
    }
    else if (value >= 75) {
      return {
        border: `1px solid var(--color-dark)`,
        backgroundColor: `var(--color-highlight)`
      }
    }
    return {
      border: `1px solid var(--color-dark)`,
      backgroundColor: `var(--color-secondary)`
    }
  }

  return (
    <div className="progress-bar">
      <div className="line">
        <div className="color-line" style={lineStyles()}> 
          <div className="end-point">
            <div className="end-point-inner" style={innerPointStyles()}>
            </div>
          </div>
        </div>
      </div>
      <div className="values">
        <div className="current">
          <div>
            {getCurrency(props.value)}
          </div>
          <div className="label">
            {t('progressBar.current')} 
          </div>
        </div>
        <div className="limit">
          <div className="currency">
            {getCurrency(props.limit)}
          </div>
          <div className="label">
            {t('progressBar.limit')} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
