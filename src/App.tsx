/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import Theme from './components/Theme';
import IndexPage from './pages/Index';
import { ApplicationStore } from './store';
import { Provider } from 'react-redux';

ApplicationStore.init();
const App: React.FC = () => {
  console.log('start');
  return (
    <div id='root-container' className='app-container'>
      <Theme>
        <IndexPage />
      </Theme>
    </div>
  );
};

export default App;
