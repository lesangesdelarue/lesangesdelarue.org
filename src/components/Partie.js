import React, { Component } from 'react';
import { Div, Subheadline } from './Typo';
import Content from './Content';
import Images from './Images';

class Partie extends Component {
  render() {
    const {titre, color, texte, images} = this.props
    return (
      <Div row>
        <Div colXs={12} colSm={6}>
          <Subheadline marginBottom={1} style={{color: color}}>{titre}</Subheadline>
          <Content>{texte}</Content>
        </Div>
        <Div colXs={12} colSm={6}>
          <Images images={images}/>
        </Div>
      </Div>
    );
  }
}

export default Partie;