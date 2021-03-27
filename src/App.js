import "./App.css";
import ListPockemon from "./components/listPockemon/listPockemon";
import PockemonDetails from "./components/pockemonDetails/pockemonDetails";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/pockemon" render={() => <ListPockemon />}></Route>
      <Route
        path="/pockemon/details/:id"
        render={() => <PockemonDetails />}
      ></Route>
    </div>
  );
};

export default App;
