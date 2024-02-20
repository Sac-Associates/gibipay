import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";
import Protected from './pages/Protected';
import Login from './pages/Login';
import Institution from './pages/Institution';
import Layout from './components/Layout';
import RequireAuth from './RequireAuth';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from './config/theme';
import Transactions from './containers/Transactions';
import Bills from './containers/Bills';
import Analyics from './containers/Analytics';
import Settings from './containers/Settings';
import Marketplace from './containers/Marketplace';
import Dashboard from './containers/Dashboard'; 
import Accounts from './containers/Accounts';


function App() {
  /** @type {import("@mui/material").SxProps} */
  const styles = {
    container: {
        display: 'flex',
        bgcolor: 'neutral.light',
        height: 'calc(100% - 64px)'
    },
  }

  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme = {theme} >
        <Authenticator.Provider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    <RequireAuth>
                      <Protected />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/institution/:id"
                  element={
                    <RequireAuth>
                      <Institution />
                    </RequireAuth>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={
                  <RequireAuth>
                    <Dashboard/>
                  </RequireAuth>
                }/>
                <Route path="/transactions" element={
                  <RequireAuth>
                    <Protected/>
                  </RequireAuth>
                }/>
                <Route path="/marketplace" element={
                  <RequireAuth>
                    <Marketplace/>
                  </RequireAuth>
                }/>
                <Route path="/bills" element={
                  <RequireAuth>
                    <Bills/>
                  </RequireAuth>
                }/>
                <Route path="/analytics" element={
                  <RequireAuth>
                    <Analyics/>
                  </RequireAuth>
                }/>
                <Route path="/accounts" element={
                  <RequireAuth>
                    <Accounts/>
                  </RequireAuth>
                }/>
                <Route path="/settings" element={
                  <RequireAuth>
                    <Settings/>
                  </RequireAuth>
                }/>
              </Route>
            </Routes>
          </BrowserRouter>
        </Authenticator.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
