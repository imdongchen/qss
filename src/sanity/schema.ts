import {SchemaTypeDefinition} from 'sanity'

import {navLinkType, siteMetadataType} from './types/siteMetadata'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [siteMetadataType, navLinkType],
}
