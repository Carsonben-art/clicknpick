import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Login from './Login';
import { AuthProvider } from './context/AuthProvider';
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>      
    <Login />
    {/* <App /> */}
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
