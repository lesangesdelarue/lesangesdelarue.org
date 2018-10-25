import React, { Component, Fragment } from 'react';
import { Div } from './Typo';
import colors from './colors';
const Container = Div.extend``
const Section = Div.withComponent('a').extend`
  text-decoration: none;
  color: ${colors.white};
  font-size: 1.125rem;
  border-radius: 4px;
  &:nth-of-type(1) {
    background: ${colors.green}
  }
  &:nth-of-type(2) {
    background: ${colors.blue}
  }
  &:nth-of-type(3) {
    background: ${colors.red}
  }
  &:nth-of-type(4) {
    background: ${colors.purple}
  }
  &:nth-of-type(even) {
    transform: rotate(3deg)
  }
  &:nth-of-type(odd) {
    transform: rotate(-3deg)
  }

`
class MenuSections extends Component {
  render() {
    const { sections } = this.props;
    return (
      <Div dFlexSm centerSm>
        {sections.map(section => (
          <Section paddingSm={[0.5,1]} marginSm={[0, 0.5]} href={`#${section.anchor}`}>{section.texte_bouton}</Section>
        ))}
      </Div>
    );
  }
}


export default MenuSections