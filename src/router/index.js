import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import App from '../sites/home/index'
import NotFound from '../sites/404/index'
import NovaArmy from '../sites/nova-army/index'
import Header from '../components/header/index'
export const Routes = () => {
  return (
    <>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/404"                                                            >               <NotFound /> </Route>
                    <Route exact path={["/nova-army", "/nova-simp-army", "/novaarmy", "/novasimparmy"]} > <Header />    <NovaArmy /> </Route>
                    <Route exact path={["/home", "/", ""]}                                              > <Header />    <App/> </Route>

                    <Redirect to="/404" />
                </Switch>
        </BrowserRouter>
    </>
  );
};
export default Routes;