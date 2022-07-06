import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './routes/dashboard';
import Budget from './routes/budget';
import Categories from './routes/categories';
import Import from './routes/import';

const Spendahoy = () => {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>Spendahoy</h1>
        </div>
        <nav>
          <NavLink to="/">{t('router.dashboard')}</NavLink>
          <NavLink to="/budget">{t('router.budget')}</NavLink>
          <NavLink to="/categories">{t('router.categories')}</NavLink>
          <NavLink to="/import">{t('router.import')}</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="budget" element={<Budget/>} />
          <Route path="categories" element={<Categories />} />
          <Route path="import" element={<Import />} />
        </Routes>
      </main>
    </div>
  )
}

export default Spendahoy;
