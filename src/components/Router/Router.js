import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import App from "components/App";
import ErrorBoundary from "components/ErrorBoundary";
import { renderLoader } from "components/Loading";

const renderEnv = match => {
  return <h2>Environment: {match.params.env}</h2>;
};

export default function Router() {
  return (
    <ErrorBoundary name="RouterErrorBoundary">
      <Suspense fallback={renderLoader()}>
        <Route path="/" component={App} />
        <Route path="/__/:env" render={({ match }) => renderEnv(match)} />
      </Suspense>
    </ErrorBoundary>
  );
}
