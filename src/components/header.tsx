import { useTranslation } from 'react-i18next';
import NavigationLink from './navigationLink';

const Header = () => {

  const { t } = useTranslation();

  return (
    <header>
      <div className="logo">
        <h1>{t('appTitle')}</h1>
      </div>
      <nav>
        <NavigationLink to="/" routerLink="router.dashboard" />
        <NavigationLink to="/budget" routerLink="router.budget" />
        <NavigationLink to="/categories" routerLink="router.categories" />
        <NavigationLink to="/import" routerLink="router.import" />
      </nav>
    </header>
  )
}

export default Header;
