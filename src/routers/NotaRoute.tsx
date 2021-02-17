import React from "react";
import {Route, Switch, useRouteMatch, Redirect} from "react-router-dom";
import NotaPage from "../pages/notas";
import NewNotaPage from "../pages/notas/new";
import EditPage from "../pages/notas/edit";

const NotaRoute = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}`} exact component={NotaPage} />
            <Route path={`${path}/new`} exact component={NewNotaPage} />
            <Route path={`${path}/:id`} exact component={EditPage} />
            <Redirect to={`${path}`} />
        </Switch>
    );

}

export default NotaRoute;
