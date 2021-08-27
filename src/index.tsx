import i18next from 'i18next';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import en from './translations/en.json';
import fr from './translations/fr.json';
import hy from './translations/hy.json';
import ru from './translations/ru.json';
import history from './utils/history';
import './styles/main.scss';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: en, // 'common' is our custom namespace
    },
    ru: {
      common: ru,
    },
    fr: {
      common: fr,
    },
    hy: {
      common: hy,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
