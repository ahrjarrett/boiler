import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import App from "components/App";
import ErrorBoundary from "components/ErrorBoundary";
import * as config from "config";

const renderLoader = () => <h3>Loading...</h3>;
const renderEnv = params => {
  console.log("params", params);
  return <h2>Environment: {params.env}</h2>;
};

export default function Router() {
  return (
    <ErrorBoundary name="RouterErrorBoundary">
      <Suspense fallback={renderLoader()}>
        <Route path="/" component={App} />
        <Route
          path="/__/:env"
          render={({ match }) => renderEnv(match.params)}
        />
      </Suspense>
    </ErrorBoundary>
  );
}
