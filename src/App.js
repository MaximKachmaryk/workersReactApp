import "./App.css";
import AppFilter from "./components/app-filter/app-filter";
import AppInfo from "./components/app-info/app-info";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employers-add-form";

import SearchPanel from "./components/search-panel/search-panel";

function App() {
  const data = [
    { name: "John C.", salary: 900, increase: false, id :1},
    { name: "Alex M.", salary: 3000, increase: true , id :2},
    { name: "Carl W.", salary: 5000, increase: false ,id :3 }
  ];

  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeesList data={data} />
        <EmployeesAddForm />
      </div>{" "}
    </div>
  );
}

export default App;
