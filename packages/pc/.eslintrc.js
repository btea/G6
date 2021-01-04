module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    $: true,
    _: true,
  },
  rules: {
    'no-bitwise': 0,
    'import/order': 0,
    'no-plusplus': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'operator-assignment': 0,
    'consistent-return': 0,
    'lines-between-class-members': 0,
    'class-methods-use-this': 0,
    'lines-between-class-members': 0,
    'no-multi-assign': 0,
    'no-continue': 0,
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'prefer-destructuring': 0,
    'guard-for-in': 0,
    'no-restricted-globals': 0,
    'max-classes-per-file': 0,
    '@typescript-eslint/no-invalid-this': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/array-type': 0,
    'import/export': 0,
    // 后面需要去掉
    'no-restricted-syntax': 0,
    'prefer-spread': 0,
    '@typescript-eslint/camelcase': 0,
    'no-loop-func': 0,
    '@typescript-eslint/no-loop-func': 0,
    '@typescript-eslint/no-redeclare': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-expressions': 0,
    'dot-notation': 0,
    'array-callback-return': 0,
    'one-var': 0,
    'no-lonely-if': 0
  },
};
