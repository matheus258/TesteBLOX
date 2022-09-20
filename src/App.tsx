import React, { useState } from 'react';
import Routers from './routes/Routes';
import { AuthProvider } from './contexts/auth'
import GlobalStyle from './assets/styles/global'
import { Home } from './pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)


  return (
    <AuthProvider>
      <Routers />
      <GlobalStyle />
    </AuthProvider>
  )
}

export default App
