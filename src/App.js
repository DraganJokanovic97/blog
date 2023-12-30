import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFount from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFount />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
