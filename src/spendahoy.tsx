import { useTranslation } from 'react-i18next';
import { NavLink, Routes, Route } from 'react-router-dom';

import Header from './components/header';

import Dashboard from './routes/dashboard';
import Budget from './routes/budget';
import Categories from './routes/categories';
import Import from './routes/import';

const Spendahoy = () => {

  return (
    <div className="App">
      <Header />
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
