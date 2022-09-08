import { useState, useContext } from 'react';
import { SpendahoyContext }  from '../context/spendahoyContextProvider';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'
import { getCurrentMonth, getCurrentYear } from '../helpers/date.helper';

const Header = () => {

  const { t } = useTranslation();

  const {state, dispatch} = useContext(SpendahoyContext);
  const [month, setMonth] = useState<number>(state.month);

  const optionMonths = () => {
    let months = [];
    for(let i = getCurrentMonth(); i > 0; i--) {
      months.push(<option key={i} value={i}>{getCurrentYear() + ' ' + t(`date.months.${i-1}`)}</option>);
    }
    return months;
  }

  const changeCurrentMonth = async (event: any) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth);
    dispatch({
      type: 'UPDATE_MONTH',
      month: selectedMonth
    });
  }

  return (
    <header>
      <div className="logo">
        <h1>{t('appTitle')}</h1>
        <select
          onChange={changeCurrentMonth}
          name="selectedMonth">
          value={month}
          { optionMonths() }
        </select>
      </div>
      <nav>
        <NavLink to="/">{t('router.dashboard')}</NavLink>
        <NavLink to="/budget">{t('router.budget')}</NavLink>
        <NavLink to="/categories">{t('router.categories')}</NavLink>
        <NavLink to="/import">{t('router.import')}</NavLink>
      </nav>
    </header>
  )
}

export default Header;
