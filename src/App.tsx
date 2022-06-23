import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './routes/dashboard';
import Budget from './routes/budget';
import Categories from './routes/categories';
import Import from './routes/import';

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <nav>
        <Link to="/">{t('router.dashboard')}</Link>
        <Link to="/budget">{t('router.budget')}</Link>
        <Link to="/categories">{t('router.categories')}</Link>
        <Link to="/import">{t('router.import')}</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="budget" element={<Budget/>} />
          <Route path="categories" element={<Categories />} />
          <Route path="import" element={<Import />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
