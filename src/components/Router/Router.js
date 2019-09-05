import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import App from "components/App";
import ErrorBoundary from "components/ErrorBoundary";
import * as config from "config";

const renderLoader = () => <h3>Loading...</h3>;
const renderEnv = match => {
  console.log("match", match);
  return <h2>Environment: {match.env}</h2>;
};

export default function Router() {
  return (
    <ErrorBoundary name="RouterErrorBoundary">
      <Suspense fallback={renderLoader()}>
        <Route path="/" component={App} />
        <Route path="/__?:env" render={({ match }) => renderEnv(match)} />
      </Suspense>
    </ErrorBoundary>
  );
}
