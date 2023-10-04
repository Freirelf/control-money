import React from 'react';
import ReactDOM from 'react-dom/client';

import { App }from './App';

import { createServer  } from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          value: 500,
          category: 'Freelancer',
          date: '14/03/1997'
        },
      ]
    })
  }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

