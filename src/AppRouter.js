import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import viewInfo from './Components/home';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />                            {/*Route for home page*/}
            <Route path="/viewconnection" component={viewInfo} />                           {/*Route for checkIn page*/}

        </Switch>
    </BrowserRouter>
);

export default AppRouter;