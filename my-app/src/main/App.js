import React, { Component } from 'react';
import './App.css';
import DisplayUsers from './components/DisplayUsers';
import UserView from './components/UserView';


var Test = React.createClass({
    render: function() {
        var userComponents = this.props.userInfo.map(function(userInfo) {
            return <DisplayUsers fName={userInfo.fName} sName={userInfo.sName} DoB={userInfo.DoB} email={userInfo.email} tele={userInfo.tele}> </DisplayUsers>;
        });
        return <div>{userComponents}</div>;
    }
});



var userInfo = [
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Hello',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Caner',sName:'Shefik',DoB:'23/03/1998',email:'caner@gmail.com',tele:'123456789'},
    {fName:'Alan',sName:'Bob',DoB:'20/08/1962',email:'caner@gmail.com',tele:'123456789'}
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>User Dashboard</h2>
        </div>
        <p className="App-intro">
            <Test userInfo={userInfo} />


        </p>
      </div>
    );
  }
}

export default App;

/*<UserView fName="Caner" sName="Shefik" DoB="23/03/1998"></UserView>
*/
