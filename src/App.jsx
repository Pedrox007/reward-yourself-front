import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Tarefas from '../src/components/Tarefas'
import LoginBox from '../src/components/Box'

function App() {
  return (
    <>
    <Router>
      <Routes>    
        <Route path='login' Component={LoginBox}/>
        <Route path='tarefas' Component={Tarefas}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
