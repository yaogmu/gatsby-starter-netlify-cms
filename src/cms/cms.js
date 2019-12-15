import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import FussballPagePreview from './preview-templates/FussballPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import VereinPagePreview from './preview-templates/VereinPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('fussball', FussballPagePreview)
CMS.registerPreviewTemplate('verein', VereinPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
