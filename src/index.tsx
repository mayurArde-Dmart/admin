/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { ApplicationStore } from './store';
// import './style.css';

ApplicationStore.init();
const store = ApplicationStore.store;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
