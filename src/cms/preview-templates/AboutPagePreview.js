import React from 'react'
import PropTypes from 'prop-types'
import { FussballPageTemplate } from '../../templates/fussball-page'

const FussballPagePreview = ({ entry, widgetFor }) => (
  <FussballPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FussballPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FussballPagePreview
