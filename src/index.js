import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter } from 'react-router-dom'


const options = {
  position: 'top center',
  // timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

// const Root = () => (
//   <AlertProvider template={AlertTemplate} {...options}>
//     <App />
//   </AlertProvider>
// )

// render(<Root />, document.getElementById('root'))

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
