import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { Suspense, lazy } from 'react';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="lds-spinner"><div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

