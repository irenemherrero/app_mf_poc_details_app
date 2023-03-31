import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./routes";
ReactDOM.render(
    <Router>
        <Routes>
            {routes.map(route => (
                <Route
                key={route.path}
                path={route.path}
                element={route.element}
                exact={route.exact}
                />
            ))}
        </Routes>
                    
    </Router>,
    document.getElementById("app")
)