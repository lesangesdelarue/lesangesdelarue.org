import React, { Component } from 'react';
import { Div, Title, Subheadline } from './Typo';
import Content from './Content';
import Images from './Images';

const Container = Div.extend`
  background: ${props => props.color};
`

class SectionQuoi extends Component {
  render() {
    const {titre, color, parties, negative} = this.props;
    return (
      <Container color={color} paddingTop={4} paddingBottom={4}>
        <Div container id="section_quoi">
          <Title marginBottom={2.5} centerXs style={{color: !negative && color}} negative={negative}>{titre}</Title>
          <Div row>
            {parties.map(partie => (
              <Div colXs={12} colSm={6} colMd={4} style={{background: partie.titre && partie.titre.trim().length > 0 && 'rgba(0,0,0,0.05)'}}>
                <Images images={partie.images}  negative={negative}/>
                <Subheadline marginBottom={1} negative={negative}>{partie.titre}</Subheadline>
                <Content  negative={negative}>{partie.texte}</Content>
              </Div>
            ))}
          </Div> 
        </Div>
      </Container>
    );
  }
}

export default SectionQuoi;