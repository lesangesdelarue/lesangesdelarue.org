import React from 'react';
import { Div } from './Grid';
import { Label, Caption } from './Typo';

const Photo = Div.extend`
  > img {
    width: 132px;
  }
  position: relative;
`

const Bandeau = Div.extend`
  background: ${props => props.color};
  padding: 12px 24px;
  color: white;
  transform: rotate(-3deg);
  top: -24px;
  display: inline-block;
`;

const Avatar = ({nom, type, metier, image, color}) => (
  <Div>
    <Photo>
      <img src={image} />
      {type && <Bandeau color={color}>{type}</Bandeau>}
    </Photo>
    <Label>{nom}</Label>
    <Caption>{metier}</Caption>
  </Div>
);

export default Avatar;