import React, { Component } from 'react';
import styled from 'styled-components';
import {Div, Title} from './Typo';
import Content from './Content';
import MenuSections from './MenuSections';
import colors from './colors';
const Container = Div.extend`
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  position: relative;
  height: 100vh;
`
const Footer = Div.extend`
  background: url('/img/background-ellipse-white.png')  no-repeat center center;
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

const Logo = styled('img')`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
`
class Hero extends Component {
  render() {
    const {image, titre, sections} = this.props;
    return (
      <Container image={image}>
        <Logo src="/img/les-anges-de-la-rue-logo.png" />
        <Footer centerSm paddingSm={[1.5,0]}>
          <Title><Content marginBottomSm={1.5}>{titre}</Content></Title>   
          <MenuSections sections={sections}/>
        </Footer>
      </Container>
    );
  }
}

export default Hero;