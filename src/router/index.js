import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import App from '../sites/home/index'
import NotFound from '../sites/404/index'
export const Routes = () => {
  return (
    <>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/404">
                        <NotFound/>
                    </Route>

                    <Route exact path={["/home", "/"]}>
                        <App/>
                    </Route>

                    <Redirect to="/404" />
                </Switch>
        </BrowserRouter>
    </>
  );
};
export default Routes;