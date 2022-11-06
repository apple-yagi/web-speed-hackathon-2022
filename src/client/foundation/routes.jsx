import React, { Fragment, Suspense } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

import { CommonLayout } from "./layouts/CommonLayout";

const LoadableTop = React.lazy(() =>
  import(/* webpackChunkName: "Top" */ "./pages/Top"),
);
const LoadableOdds = React.lazy(() =>
  import(/* webpackChunkName: "Odds" */ "./pages/races/Odds"),
);
const LoadableRaceCard = React.lazy(() =>
  import(/* webpackChunkName: "RaceCard" */ "./pages/races/RaceCard"),
);
const LoadableRaceResult = React.lazy(() =>
  import(/* webpackChunkName: "RaceResult" */ "./pages/races/RaceResult"),
);

/** @type {React.VFC} */
export const Routes = () => {
  return (
    <RouterRoutes>
      <h1>tet</h1>
      <Suspense fallback={<Fragment></Fragment>}>
        <Route element={<CommonLayout />} path="/">
          <Route index element={<LoadableTop />} />
          <Route element={<LoadableTop />} path=":date" />
          <Route path="races/:raceId">
            <Route element={<LoadableRaceCard />} path="race-card" />
            <Route element={<LoadableOdds />} path="odds" />
            <Route element={<LoadableRaceResult />} path="result" />
          </Route>
        </Route>
      </Suspense>
    </RouterRoutes>
  );
};
