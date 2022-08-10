import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/Login.css'
import './assets/styles/Landing.css'
import './assets/styles/Member.css'
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContextProvider } from './context/userContext';

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserContextProvider>
    <QueryClientProvider client={client}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </UserContextProvider>
  </React.StrictMode>
);

