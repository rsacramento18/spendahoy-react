import { Routes, Route } from 'react-router-dom';
import './styles/main.css';

import Header from './components/header';

import Dashboard from './routes/dashboard';
import Budget from './routes/budget';
import Categories from './routes/categories';
import Import from './routes/import';
import { SpendahoyProvider } from './context/spendahoyContextProvider';

const Spendahoy = () => {

  return (
    <SpendahoyProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="budget" element={<Budget />} />
            <Route path="categories" element={<Categories />} />
            <Route path="import" element={<Import />} />
          </Routes>
        </main>
      </div>
    </SpendahoyProvider>
  )
}

export default Spendahoy;
