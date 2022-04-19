import { Route, Routes, BrowserRouter  } from "react-router-dom";
import './App.css';
import Form from './components/pages/form';
import Home from './components/pages/home';
import RunQuery from "./components/pages/run_query";
import SelectTable from './components/pages/SelectTable';
import ViewTable from "./components/pages/ViewTable";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/SelectTable" exact element={<SelectTable />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/runquery" exact element={<RunQuery />} />
        <Route path="/ViewTable" exact element={<ViewTable />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
