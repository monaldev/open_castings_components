module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'OpenCastingsComponents',
      externals: {
        react: 'React',
        'material-ui': 'MaterialUI',
        'font-awesome': 'FontAwesome',
      },
    },
  },
};
