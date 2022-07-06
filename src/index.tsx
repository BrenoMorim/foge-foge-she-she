import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from 'App';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(  <React.StrictMode>
//   <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
