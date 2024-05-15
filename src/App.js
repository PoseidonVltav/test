import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NoPage from "./NoPage";
import Api from "./Api/Api";
import Navigation from './Navigation';





function App() {


  return (
    <HashRouter basename='/'>
      <Navigation/>
      <Routes>
        <Route index element={<Home />} />;
        <Route path="/api" element={<Api />} />;
        <Route path="*" element={<NoPage />} />;
      </Routes>
    </HashRouter>

  );
}

export default App;