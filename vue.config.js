module.exports = {
  runtimeCompiler: true,

  pluginOptions: {
    quasar: {
      rtlSupport: true,
      treeShake: true
    }
  },

  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
};
