import {visionTool} from '@sanity/vision'
import {Config, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {dataset, projectId} from './src/sanity/env'
// import {deskTool} from './src/sanity/lib/desk'
import {schema} from './src/sanity/schema'

export default defineConfig<Config>({
  basePath: '/studio',
  dataset,
  projectId,
  schema,
  title: 'QSS Admin',

  plugins: [deskTool(), visionTool()],
})
