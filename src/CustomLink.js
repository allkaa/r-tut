import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

export default function CustomLinkExample() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink
          activeOnlyWhenExact={true}
          to="/"
          label="Home"
        />
        <OldSchoolMenuLink to="/about" label="About" />

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  console.log('activeOnlyWhenExact:');
  console.log(activeOnlyWhenExact);
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });
  console.log('match value called as useRouteMatch(path: to, exact: activeOnlyWhenExact):');
  console.log(match);
  let ttt = match && "=> "; // expr1 && expr2	-> If expr1 can be converted to true, returns expr2; else, returns expr1.
  console.log('ttt');
  console.log(ttt);
  return (
    <div className={match ? "active" : ""}>
      {match && "=> "}
      <Link to={to}>{label}</Link>
      {console.log('match:')}
      {console.log(match)}
      {console.log('to:')}
      {console.log(to)}
      {console.log('label:')}
      {console.log(label)}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
