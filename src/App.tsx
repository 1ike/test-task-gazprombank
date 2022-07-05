import React from 'react';

import Layout from './components/Layout';
import Form from './components/Form';
import './App.scss';
import { UserProvider } from './contexts/User';

function App() {
  return (
    <UserProvider>
      <Layout>
        <Form />
      </Layout>
    </UserProvider>
  );
}

export default App;
