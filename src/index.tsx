import React from 'react';
import ReactDOM from 'react-dom/client';

import { App }from './App';

import { Model, createServer  } from 'miragejs'

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 500,
          type: 'deposit',
          category: 'Freelance',
          createdAt: new Date('2023-06-10 10:00:00'),
        },
        {
          id: 2,
          title: 'Mercado',
          amount: 200,
          type: 'withdraw',
          category: 'alimentação',
          createdAt: new Date('2023-06-15 14:00:00'),
        },
      ],
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    });
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

