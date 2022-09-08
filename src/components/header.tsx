import { useState, useContext, useEffect } from 'react';
import { SpendahoyContext }  from '../context/spendahoyContextProvider';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'
import { getCurrentMonth, getCurrentYear } from '../helpers/date.helper';

const Header = () => {

  const { t } = useTranslation();

  const { month, dispatch } = useContext(SpendahoyContext);

  const optionMonths = () => {
    let months = [];
    for(let i = getCurrentMonth(); i > 0; i--) {
      months.push(<option className="date-option" key={i} value={i}>{getCurrentYear() + ' ' + t(`date.months.${i-1}`)}</option>);
    }
    return months;
  }

  const changeCurrentMonth = async (event: any) => {
    const selectedMonth = event.target.value;
    dispatch({
      type: 'UPDATE_MONTH',
      payload: parseInt(selectedMonth)
    });
  }

  return (
    <header>
      <div className="logo-date">
        <div className="logo">
          <h1>{t('appTitle')}</h1>
        </div>
        <div className="date">
          <select
            onChange={changeCurrentMonth}
            name="selectedMonth">
            { optionMonths() }
          </select>
        </div>
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
