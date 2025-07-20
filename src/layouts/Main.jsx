import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import NotFound from "../components/notFound/NotFound";
import { routesConfig } from "../pages/dashboard/routes";
function  Main() {
  return (
    <div className="p-6">
        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
            {routesConfig.map((route, index) => {
              return route.index ? (
                <Route
                  index
                  key={`index-${index}`}
                  element={<route.component />}
                />
              ) : (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              );
            })}
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default Main;
