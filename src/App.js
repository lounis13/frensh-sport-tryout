import './App.css';
import Contact from "./contact/Contact";
import AddContact from "./contact/AddContact"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="container">
              <Contact/>
          </div>
      </Router>
  );
}

export default App;
