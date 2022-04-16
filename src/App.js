import { Link, Route, Routes, BrowserRouter  } from "react-router-dom";
import './App.css';
import Form from './components/pages/form';
import Home from './components/pages/home';
import Table_select from './components/pages/table_select';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/table_select" exact element={<Table_select />} />
        <Route path="/form" exact element={<Form />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
