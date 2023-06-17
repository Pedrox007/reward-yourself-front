import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Tasks from '../src/components/Tasks'
import LoginBox from '../src/components/Box'

function App() {
  return (
    <>
    <Router>
      <Routes>    
        <Route path='login' Component={LoginBox}/>
        <Route path='tarefas' Component={Tasks}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
