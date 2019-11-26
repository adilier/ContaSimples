import React from 'react';
import Routes from './routes';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faHome, faSignOutAlt, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';

library.add(faBell, faHome, faSignOutAlt, faFileInvoiceDollar);

export default function App() {
  return <Routes />;
};
