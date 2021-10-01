import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../sites/home/index'
import AboutMe from '../sites/about-me/index'
import NotFound from '../sites/404/index'
import NovaArmy from '../sites/nova-army/index'
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Demo from "../sites/three-fiber-demo/index.js"
import { Twemoji } from 'react-emoji-render';

var LEROUTES = []

function createRoute(path, component, headerAndFooter=true, headerText="Not Specified.") {
  LEROUTES.push(
    <Route exact path={path} key={path}>
      {headerAndFooter ? <Header text={headerText}/> : ''}
      {component}
      {headerAndFooter ? <Footer/> : ''}
    </Route>
  )
  return true;
}

createRoute( "/404"                                                         , <NotFound />    , false)
createRoute( "/balls"                                                       , <Demo />        , true, "Demo")
createRoute(["/nova-army", "/nova-simp-army", "/novaarmy", "/novasimparmy"] , <NovaArmy />    , true, <Twemoji svg text="✨ Nova Army"/>)
createRoute(["/home", "/", ""]                                              , <Home />        , true, <Twemoji svg text="👋 Welcome!"/>)
createRoute(["/about-me", "/aboutme", "about"]                              , <AboutMe />     , true, <Twemoji svg text="🕵️‍♂️ About Me"/>)

export const Routes = () => {
  return (
    <>
        <BrowserRouter>
                <Switch>
                    {LEROUTES}
                    {/*<Route exact path="/404">
                      <NotFound />
                    </Route>

                    <Route exact path={["/nova-army", "/nova-simp-army", "/novaarmy", "/novasimparmy"]}> 
                      <Header text={"Nova Army"}/>
                      <NovaArmy />
                      <Footer/>
                    </Route>

                    <Route exact path="/balls">
                      <Header /> 
                      <Demo />
                      <Footer/> 
                    </Route>
                    
                    <Route exact path={["/home", "/", ""]}> 
                      <Header text={<Twemoji svg text="👋 Welcome!"/>}/>
                      <App/>
                      <Footer/>
                    </Route>*/}

                    <Redirect to="/404" />
                </Switch>
        </BrowserRouter>
    </>
  );
};
export default Routes;