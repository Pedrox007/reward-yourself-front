import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Tasks from './pages/Tasks';
import LoginBox from './pages/Box';
import SignUp from './pages/SignUp';
import Rewards from './pages/Rewards';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />

          <Route path="login" Component={LoginBox} />
          <Route path="cadastro" Component={SignUp} />
          <Route path="tarefas" Component={Tasks} />
          <Route path="recompensas" Component={Rewards} />

          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
