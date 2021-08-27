import logo from "./logo.svg";
import "./App.css";
import CustomInputApp from "./pages/custom-input-app";
import Counter from "./pages/counter";
import Login from "./pages/login";
import Location from "./pages/location";
import EasyApp from "./pages/easy-button";
import TodoList from "./pages/todo-list";
import SetTitle from "./pages/set-title";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import LocationDisplay from "./components/location-display";

function Home() {
  return (
    <div>
      <div>Home page</div>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <div>About page</div>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      {/* <EasyApp /> */}
      <Router>
        <Link to="/home">Home</Link> |<Link to="/about">About</Link> |
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <LocationDisplay />
      </Router>
      {/* <Location /> */}
      {/* <CustomInputApp /> */}
      {/* <Login /> */}
      {/* <Counter /> */}
      {/* <CustomInputApp />     
       <Login />
      <Location />
      <EasyApp />
      <TodoList />
      <SetTitle /> */}
    </div>
  );
}

export default App;
