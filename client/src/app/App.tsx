import React, { FC } from 'react';
import AppRoutes from '../routes/AppRoutes';
import Layout from './Layout';

const App: FC = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
