import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import SearchPhoto from './components/SearchPhotos/searchPhoto';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/search/photos/:name" exact component={SearchPhoto}/>
        </Switch>
    );
};

export default Routes;