import Login from "./Components/Login";
import Home from "./Page/Home";
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
    </div>

    
  );
}

export default App;
