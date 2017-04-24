/**
 * Created by CSHEFIK on 19/04/2017.
 */
import React, { Component } from 'react';
import { Row} from 'react-flexbox-grid';
import UserView from './UserView';
import styled, {keyframes} from 'styled-components';


const Window = styled.div`
  background: #FAFAFA;
  border-radius: 2px;
  padding: 0;
  font-family: Helvetica;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin-bottom: 50px;
  &:hover {
    box-shadow: inset 9999px 9999px 9999px rgba(209,209,209,209.1);
  }
  width: 80%;
  margin: 0 auto;  
`;

const Name = styled.h2`
   color: black;
   font: 20px arial, sans-serif;
`;



const Button = styled.input`
    height: 50px;
    width: 50px;
    transform: rotate(90deg);
    align="right"
`;


class DisplayUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
                showComponent: !this.state.showComponent,
        });
    }
    render() {
        return (
            <Window>
                <Row around="xs">
                        <Name>{this.props.fName}</Name>
                        <Name>{this.props.sName}</Name>
                        <Name>{this.props.DoB}</Name>

                    <Button type="image" src="http://www.theartics.com/public_html/imgs/arrow-icon-28.png" onClick={this._onButtonClick}/>
                    {this.state.showComponent ?
                        <UserView fName={this.props.fName} sName={this.props.sName} DoB={this.props.DoB} email={this.props.email} tele={this.props.tele}  /> :
                    null
                    }
                </Row>
            </Window>
        );
    }
}

export default DisplayUsers;
