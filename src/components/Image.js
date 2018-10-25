import React, { Component, Fragment } from 'react';
import { Div, Caption } from './Typo';
const ImageContainer = Div.extend`
`
const Picture = Div.withComponent('img').extend`
  max-width: 100%;
`
const Legende = Caption.extend`
  padding: 8px 0 8px 18px;
  border-left: solid 2px;
  border-color: ${props => props.borderColor};
  color: ${props => props.textColor};
  font-style: italic;
  text-decoration: underline;
  
`
class Image extends Component {
  render() {
    const {image, borderColor = '#979797', textColor = '#979797', ...etc} = this.props;
    return (   
          <ImageContainer {...etc}>
            <Picture src={image.image}/>
            {image.legende && image.legende.trim().length > 0 && <Legende borderColor={borderColor} textColor={textColor} marginTop={0.5}>{image.legende}</Legende>}
          </ImageContainer>
    );
  }
}

export default Image;