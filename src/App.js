import { Route, Routes, BrowserRouter  } from "react-router-dom";
import './App.css';
import Form from './components/pages/form';
import Home from './components/pages/home';
<<<<<<< HEAD
import RunQuery from "./components/pages/run_query";
import Table_select from './components/pages/table_select';
=======
import SelectTable from './components/pages/SelectTable';
import ViewTable from "./components/pages/ViewTable";
>>>>>>> 8f903e5d56b36af6933ce0900242cc1a57a21060

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/SelectTable" exact element={<SelectTable />} />
        <Route path="/form" exact element={<Form />} />
<<<<<<< HEAD
        <Route path="/runquery" exact element={<RunQuery />} />
=======
        <Route path="/ViewTable" exact element={<ViewTable />} />
>>>>>>> 8f903e5d56b36af6933ce0900242cc1a57a21060
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
