import React,{useEffect} from 'react';
import MainView from './components/MainView';
import Login from './components/Login';
import NewTask from './components/NewTask';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {

  useEffect(function () {
    let currentPath = window.location.pathname;
    let nextPath = validate(currentPath)
    if (currentPath !== nextPath) {
      window.location.href = nextPath;
    }
  }, []);

  const validate = ( path ) => {
    if (localStorage.getItem("loggingStaus") === "logged" && path === "/") return "/mainView";
    if (localStorage.getItem("loggingStaus") !== "logged") return "/";
    return path;
  }

  const loginView = () => (
    <Login />
  );

  const mainView = () => (
    <MainView />
  );

  const newTask = () => (
    <NewTask />
  );

  const userProfile = () => (
    <UserProfile />
  );


  return (
    <Router>
          <Route exact path="/" component={loginView} />
          <Route path="/mainView" component={mainView} />
          <Route path="/newTask" component={NewTask} />
          <Route path="/userProfile" component={userProfile} />
    </Router>
  );
}

export default App;
