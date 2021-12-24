import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import AboutUs from "./Pages/Pages/AboutUS/AboutUs";
import Gallery from "./Pages/Pages/Gallery/Gallery";
import Login from "./Pages/Pages/Login/Login";
import Registration from "./Pages/Pages/Registration/Registration";
import Contact from "./Pages/Pages/Contact/Contact";
import Faq from "./Pages/Pages/Faq/Faq";
import Courses from "./Pages/Courses/Courses";
import Instructors from "./Pages/Instructors/Instructors";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Shared/Footer/Footer";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import ExtraRoute from "./Pages/ExtraRoute/ExtraRoute";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/instructors">
              <Instructors />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/extraroute">
              <ExtraRoute />
            </Route>
            <Route path="/purchase">
              <Purchase />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
