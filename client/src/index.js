import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n.js';
import reportWebVitals from './reportWebVitals';
import { AuthContext, AuthContextProvider } from './context/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthContextProvider>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </AuthContextProvider>
// );

const RootWithDir = () => {
  const { dir } = React.useContext(AuthContext);
  React.useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

root.render(
  <AuthContextProvider>
    <RootWithDir />
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
