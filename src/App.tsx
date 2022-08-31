import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';

function App():JSX.Element {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<h1>Link 1</h1>}/>
      <Route path="/link2" element={<h1>Link 2</h1>}/>
      <Route path="/link3" element={<h1>Link 3</h1>}/>
      <Route path="/link4" element={<h1>Link 4</h1>}/>
    </Route>
  </Routes>  
)}

export default App;
