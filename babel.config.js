module.exports = {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  }
  