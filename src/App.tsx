import { Suspense } from "react";

import Layout from "components/Layout";
import Spinner from "components/reusable-components/Spinner";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import routes from "./routes";

const App = () => (
  <div className="App">
    <Helmet>
      <html lang="en" />
      <title>Arnology</title>
      <meta name="description" content="Some content here" />
      <link rel="canonical" href="https://arnology.am" />
    </Helmet>
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact={true}
            />
          ))}
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  </div>
);

export default App;
