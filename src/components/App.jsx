import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from './loader/loader';
import NotFound from 'pages/NotFound/NotFound';
import Phonebook from 'pages/Phonebook/Phonebook';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
