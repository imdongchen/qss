import {groq} from 'next-sanity'

export const ALL_QUERY = groq`
*[_type == 'page' && slug.current == $slug]{
  title,
  slug,
  content[]{
    _key,
    _type == 'pageElement' => {
      ...article->{
        _type,
        supertitle,
        title,
        subtitle,
        content
      }
    }
  }
}
`

export const PAGE_DATA_QUERY = groq`
  *[_type == 'page' && slug.current == 'qss'][0]{
    title,
    slug,
    content[]{
      _key,
      _type == 'pageElement' => {
        ...article->{
          _type,
          supertitle,
          title,
          subtitle
        }
      }
    }
  }
`

export const PAGE_PATHS_QUERY = groq`
  *[_type == 'page' && defined(slug.current)]{
    'slug': slug.current
  }
`
