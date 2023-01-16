import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteMetadataType = defineType({
  type: 'document',
  name: 'siteMetadata',
  title: 'Site Metadata',
  icon: CogIcon,

  fields: [
    defineField({
      type: 'string',
      name: 'siteName',
      title: 'Site Name',
    }),

    defineField({
      type: 'image',
      name: 'logo',
      title: 'Site Logo',
    }),

		defineField({
			type: 'array',
			name: 'navLinks',
			title: 'Nav Links',
			of: [{type: 'navLink'}]
		})
  ],
})

export const navLinkType = defineType({
	 type: 'object',
	 name: 'navLink', title: 'Nav Link',

	 fields: [
		defineField({
			type: 'string',
			name: 'label',
			title: 'Label'
		}),
		defineField({
			type: 'string',
			name: 'link',
			title: 'Link'
		})
	 ]
})


