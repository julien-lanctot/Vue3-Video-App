const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://ms0e9sptyj.execute-api.us-east-1.amazonaws.com/',
    },
  transpileDependencies: true,
  lintOnSave: false
})
