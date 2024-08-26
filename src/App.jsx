import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Router from './router/Router.jsx'
import './assets/sass/App.scss';

import { useLocation } from 'react-router-dom';
import React, { useMemo } from 'react';

function App() {
  const location = useLocation();
  const isDashboardRoute = useMemo(() => location.pathname.startsWith('/dashboard'), [location.pathname]);

  return (
    <div className={isDashboardRoute ? 'dashboard-app' : 'app'}>
      {!isDashboardRoute && <Header />}
      <Router />
      {!isDashboardRoute && <Footer />}
    </div>
  );
}

export default React.memo(App);
