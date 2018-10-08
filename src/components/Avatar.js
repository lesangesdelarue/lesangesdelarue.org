import React from 'react';
import { Div } from './Grid';
import { Label, Caption } from './Typo';
const AvatarContainer = Div.extend`
  text-align: center;
`

const Photo = Div.extend`
  > img {
    width: 132px;
    border-radius: 50%;
  }
  position: relative;
`
const Metier = Caption.extend`
  color: #6D6D6D;
`
const Bandeau = Div.extend`
  background: ${props => props.color};
  padding: 12px 24px;
  color: white;
  transform: rotate(-3deg);
  top: -24px;
  display: inline-block;
  position: relative;
  margin-bottom: -24px;
`;

const Avatar = ({nom, type, metier, image, color}) => (
  <AvatarContainer>
    <Photo>
      <img src={image} />
      {type && <Bandeau color={color}>{type}</Bandeau>}
    </Photo>
    <Label>{nom}</Label>
    <Metier>{metier}</Metier>
  </AvatarContainer>
);

export default Avatar;