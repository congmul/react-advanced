import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';

function App():JSX.Element {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<h1>Path /</h1>}/>
      <Route path="/test" element={<h1>Path /test</h1>}/>
    </Route>
  </Routes>  
)}

export default App;
