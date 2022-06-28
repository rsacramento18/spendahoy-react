import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Spendahoy from './spendahoy';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Spendahoy />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
