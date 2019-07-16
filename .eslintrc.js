// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential',
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
    globals: {
      wx: true, // wx全局变量
      GLOBAL_API_ENV: true
  },
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      'indent': [2, 4],
        'comma-dangle': 0,
        'key-spacing': 0,
        'no-useless-constructor': 0,
        'object-curly-spacing': 0,
        'no-multi-spaces': 0,
        'no-underscore-dangle': 0,
        'no-console': 0,
        'no-plusplus': 0,
        'global-require': 0,
        'no-param-reassign': 0,
        'no-shadow': 0,
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "linebreak-style": [0, "windows"]
    }
  }
