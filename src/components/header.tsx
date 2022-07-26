import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'

const Header = () => {

  const { t } = useTranslation();

  return (
    <header>
      <div className="logo">
        <h1>{t('appTitle')}</h1>
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
