import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Header from "./Header"
import Login from "./Login"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"

function App() {
  const [dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
