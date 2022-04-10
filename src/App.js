import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
