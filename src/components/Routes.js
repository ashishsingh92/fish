import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from '../App';
import NotFound from './NotFound';

class Routes extends React.Component {
    render() {
        return (
            <h1>hi</h1>
            // <Switch>
            //     <Route exact path="/" component={StorePicker} />
            //     <Route exact path="/:storeId" component={App} />
            //     <Route component={NotFound} />
            // </Switch>            
        )
    }
}

export default Routes;
