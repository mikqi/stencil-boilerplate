import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'mqi',
  plugins: [sass({
    injectGlobalPaths: ['./src/styles/utilities.scss']
  })],
  outputTargets: [
    {
      type: 'dist',

      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
}
