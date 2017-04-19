/**
 * Created by CSHEFIK on 19/04/2017.
 */
import React, { Component } from 'react';
import { Row} from 'react-flexbox-grid';
import styled from 'styled-components';

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
`;

const Name = styled.h2`
   color: black;
   font: 20px arial, sans-serif;

`;

const Button = styled.button`

`;


class DisplayUsers extends Component {
    render() {
        return (
            <Window>
                <Row around="xs">
                        <Name>{this.props.fName}</Name>
                        <Name>{this.props.sName}</Name>
                        <Name>{this.props.DoB}</Name>
                        <Button onclick="myFunction()">Click me</Button>
                </Row>
            </Window>
        );
    }
}

export default DisplayUsers;
