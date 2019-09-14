module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'my-website'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
