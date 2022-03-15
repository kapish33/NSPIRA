import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddToDo from "./components/AddToDo";
import ShowToDo from "./components/ShowToDo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddToDo />
              <ShowToDo />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
