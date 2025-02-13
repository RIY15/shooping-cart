const babel = {};

if (process.env.MIGHTYMELD) {
  babel.plugins = ['mightymeld/babel-plugin-mightymeld'];
}

module.exports = babel;