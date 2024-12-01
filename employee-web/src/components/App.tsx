import { BrowserRouter as Router, Routes, Route } from "react-router";
import { EmployeePage } from "./Pages/EmployeePage";
import { SearchEmployeePage } from "./Pages/SearchEmployeePage";
import NotFound from "./Common/NotFound";
import { UnitPage } from "./Pages/UnitPage";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <div style={{ backgroundColor: "var(--background-color)" }}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/employee/:id" element={<EmployeePage />} />
          <Route
            path="/employee"
            element={<SearchEmployeePage></SearchEmployeePage>}
          ></Route>
          <Route path="unit/:id" element={<UnitPage></UnitPage>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
