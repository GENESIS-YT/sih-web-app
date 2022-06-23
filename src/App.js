import {RealtimeData} from './components/realtimeData/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route ,Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RealtimeData/>}/>
        <Route path="/*" element={ <Navigate to="/" /> }/>
      </Routes>
    </BrowserRouter>
    //  <RealtimeData/>
  );
}

export default App;
