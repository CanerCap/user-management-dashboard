import React, {Component} from 'react';
import Layout from './components/Layout';
import MultiUsers from './components/MultiUsers';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import FormContainer from './components/FormContainer';
import {BrowserHistory, Redirect} from 'react-router';




class App extends Component {

    render() {
        var browserHistory = BrowserHistory;
        return (

        <Router history={browserHistory}>
            <div>
                <Layout/>
                <Route name="users" path="/users" component={MultiUsers}/>
                <Route path="/create" component={FormContainer}/>
                <Redirect from="/" to="users" />
            </div>

        </Router>

    )
        ;
    }
}
export default App;


