import "./App.css";
import CssGolfs from "./CssGolfs";
import CssGolf from "./CssGolf";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
            <Route path="/cssgolf">
              <CssGolf/>
            </Route>
            <Route path="/cssgolfs">
              <CssGolfs />
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
