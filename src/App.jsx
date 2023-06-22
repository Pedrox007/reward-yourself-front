import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Tasks from '../src/components/Tasks'
import LoginBox from '../src/components/Box'
import SignUp from '../src/components/SignUp'
import Rewards from "../src/components/Rewards";

function App() {
  return (
    <>
       
    <Router>
      <Routes> 
        <Route path='login' Component={LoginBox}/>
        <Route path='cadastro' Component={SignUp}/>
        <Route path='tarefas' Component={Tasks}/>
        <Route path='recompensas' Component={Rewards}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
