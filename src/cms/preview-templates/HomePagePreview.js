import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheetManager } from 'styled-components'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, widgetFor, widgetsFor }) => {
  let sections = [];
  entry.getIn(['data']).filter((v, key) => key.startsWith('section_')).every((v, key) => sections.push({...v.toJS(), key}))
  const data = entry.getIn(['data']).toJS()
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head
  return (
    <StyleSheetManager target={iframeHeadElem}>
        <HomePageTemplate {...data}/>
    </StyleSheetManager>
  
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
}

export default HomePagePreview
