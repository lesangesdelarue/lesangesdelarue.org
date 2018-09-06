import React, { Component, Fragment } from 'react';
import { Div, Caption } from './Typo';
const Image = Div.withComponent('img').extend`
  max-width: 100%;
`
class Images extends Component {
  render() {
    const {images} = this.props;
    const colSize = images.length > 1 ? 6 : 12
    return (
      <Fragment>
        {images.map(image => (
          <Div colXs={colSize} marginBottom={1.5}>
            <Image src={image.image}/>
            <Caption>{image.legende}</Caption>
          </Div>
        ))}
      </Fragment>
    );
  }
}

export default Images;