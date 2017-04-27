import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import MultiUsers from './components/MultiUsers';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import FormContainer from './components/FormContainer';
import {BrowserHistory, IndexRoute} from 'react-router';





class App extends Component {

    render() {
        var browserHistory = BrowserHistory;
        return (





        <Router history={browserHistory}>
            <div>
                <Layout/>
                <Route path="/users" component={MultiUsers}/>
                <Route path="/create" component={FormContainer}/>

            </div>

        </Router>

    )
        ;
    }
}
export default App;


/*<UserView fName="Caner" sName="Shefik" DoB="23/03/1998"></UserView>
*/
