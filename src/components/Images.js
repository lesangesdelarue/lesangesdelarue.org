import React, { Component, Fragment } from 'react';
import { Div, Caption } from './Typo';
const ImageContainer = Div.extend`
`
const Image = Div.withComponent('img').extend`
  max-width: 100%;
`
const Legende = Caption.extend`
  padding: 8px 0 8px 18px;
  border-left: solid 2px;
  border-color: ${props => props.color};
  color: #979797;
  font-style: italic;
  text-decoration: underline;
  
`
class Images extends Component {
  render() {
    const {images = [], color, ...etc} = this.props;
    const colSize = images.length > 1 ? 6 : 12
    return (
      <Fragment>
        {images.map(image => (
          <ImageContainer colXs={colSize} color={color} marginBottom={1.5}>
            <Image src={image.image}/>
            {image.legende && image.legende.trim().length > 0 && <Legende color={color} marginTop={0.5} {...etc}>{image.legende}</Legende>}
          </ImageContainer>
        ))}
      </Fragment>
    );
  }
}

export default Images;