import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter  basename="/Rainbowprimex">
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;