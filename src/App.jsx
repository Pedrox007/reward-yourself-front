import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Tasks from './pages/Tasks';
import LoginBox from './pages/Box';
import SignUp from './pages/SignUp';
import Rewards from './pages/Rewards';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" Component={LoginBox} />
        <Route path="cadastro" Component={SignUp} />
        <Route path="tarefas" Component={Tasks} />
        <Route path="recompensas" Component={Rewards} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
