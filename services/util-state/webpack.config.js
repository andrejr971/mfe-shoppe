const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'shoppe',
    projectName: 'util-state',
    webpackConfigEnv,
    argv
  })

  return merge(defaultConfig, {
    externals: ['zustand', 'zustand/middleware']
  })
}
