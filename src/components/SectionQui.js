import React, { Component } from 'react';
import { Div, Title } from './Typo';
import Partie from './Partie';

class SectionQui extends Component {
  render() {
    const {titre, color, parties, parrains} = this.props;
    return (
      <Div container id="section_qui">
        <Title marginBottom={2.5} centerXs style={{color: color}}>{titre}</Title>
        {parties.map(partie => (
          <Partie {...partie} color={color} />
        ))}
      </Div>
    );
  }
}

export default SectionQui;