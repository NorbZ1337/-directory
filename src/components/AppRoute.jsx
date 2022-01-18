import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRoute = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            element={route.components}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Navigate replace to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            element={route.components}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRoute;
