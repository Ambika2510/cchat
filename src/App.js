
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Join from './Join';
 import Chat from './Chat';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Join/>} />
        <Route path="/chat" element={<Chat/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
