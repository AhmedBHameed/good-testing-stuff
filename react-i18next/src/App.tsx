import './i18n';
import './App.css';
import logo from './logo.svg';
import SupportLink from './components/SupportLink/SupportLink';
import {withTranslation} from 'react-i18next';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <SupportLink />
      </header>
    </div>
  );
}

export default withTranslation()(App);
