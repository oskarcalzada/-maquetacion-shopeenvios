import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './components/Home/Home';
import Api from './components/Api/Api';
import Estimator from './components/Estimator/Estimator';
import ShippingList from './components/Shipping/ShippingList';
import ShippingEditor from './components/Shipping/ShippingEditor';
import AddressesList from './components/Addresses/AddressesList';
import Tracking from './components/Tracking/Tracking';
import Pickup from './components/Pickup/Pickup';
import AccountStatus from './components/AccountStatus/AccountStatus';
import Users from './components/Users/Users';
import PendingShippings from './components/PendingShippings/PendingShippinngs';
import Reports from './components/Reports/Reports';
import AccountBalance from './components/AccountStatus/AccountBalance'; // Import the new component
import Account from './components/Account/Account';

export default function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/cuenta" element={<Account/>} />
        <Route path="/api" element={<Api/>} />
        <Route path="/cotizar" element={<Estimator/>} />
        <Route path="/envios" element={<ShippingList/>} />
        <Route path="/nuevo-envio" element={<ShippingEditor/>} />
        <Route path="/direcciones" element={<AddressesList/>} />
        <Route path="/rastreo" element={<Tracking/>} />
        <Route path="/recoleccion" element={<Pickup/>} />
        <Route path="/estado-cuenta" element={<Outlet />}>
          <Route index element={<AccountStatus />} /> {/* Default route */}
          <Route path="saldo" element={<AccountBalance />} /> {/* Nested saldo route */}
        </Route>
        <Route path="/usuarios" element={<Users/>} />
        <Route path="/envios-pendientes" element={<PendingShippings/>} />
        <Route path="/reportes" element={<Reports/>} />
      </Routes>
    </>
  );
}

